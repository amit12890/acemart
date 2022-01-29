import React, {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState
} from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import Fuse from 'fuse.js';
import { get, size, range, sortBy, cloneDeep } from 'lodash';
import { useHistory } from 'react-router-dom';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { useUserContext } from '@magento/peregrine/lib/context/user';

import Button from '../../venia/components/Button';
import defaultClasses from './productQuestions.css';
import AddQuestion from './addQuestion';
import AddAnswer from './addAnswer';
import PlusBlock from './plusBlock';
import MinusBlock from './minusBlock';
import ReportBlock from './reportBlock';

import {
    getDateString,
    questionReducer,
    updateAnswerCountAction,
    updateQuestionCountAction
} from './utils';
import {
    getProductQuestions,
    questionRatingPlusMutation,
    answerRatingPlusMutation,
    questionRatingMinusMutation,
    answerRatingMinusMutation,
    reportQuestionMutation,
    reportAnswerMutation,
    getStoreConfig,
    getProductQAConfiguration
} from './productQuestions.gql';
import { partial } from 'lodash-es';
import RichText from '../../venia/components/RichText';
import { replaceSpecialChars } from '../../app.utils';

const sortOptions = [
    { value: '1', label: 'Most Recent Questions' },
    { value: '2', label: 'Oldest Questions' },
    { value: '3', label: 'Questions With The Most Helpful Answers' },
    { value: '4', label: 'Questions With Most Recent Answers' },
    { value: '5', label: 'Questions With  Oldest Answers' },
    { value: '6', label: 'Questions With Most Answers' }
];

const ProductQuestionsBlock = ({ productId, allowSubscribingQuestion }) => {
    const classes = useStyle(defaultClasses);

    const {
        data: questionsData,
        loading: questionsDataLoading,
        error: questionsDataError
    } = useQuery(getProductQuestions, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            productId
        }
    });

    let content;
    if (questionsDataLoading) {
        content = <div>Loading...</div>;
    } else if (!!questionsDataError) {
        content = <div>An Error Occured while loading questions data...</div>;
    } else {
        const hasItems = get(questionsData, 'questions.items.length');
        if (hasItems) {
            content = (
                <QuestionBlock questions={questionsData.questions.items} />
            );
        } else {
            content = <div>Be the first one to ask question.</div>;
        }
    }

    return (
        <div className={classes.qaWrapper}>
            <div className={classes.qaContainer}>{content}</div>
            <AddQuestion
                productId={productId}
                allowSubscribingQuestion={allowSubscribingQuestion}
            />
        </div>
    );
};

const QuestionBlock = ({ questions }) => {
    const { elementRef, expanded, setExpanded } = useDropdown();

    const classes = useStyle(defaultClasses);
    // false : Next click will expand; in default state
    const [expandBtnState, setExpandBtnState] = useState(false);
    const [expandedQuestions, setExpandedQuestions] = useState(new Set([]));
    const [searchToken, setSearchToken] = useState('');
    const [userSelectedSort, setSortBy] = useState(sortOptions[0]);
    const [queData, dispatch] = useReducer(questionReducer, { questions: [] });
    const fuseSearch = useRef();
    const history = useHistory();
    const [{ isSignedIn }] = useUserContext();

    useEffect(() => {
        // create new state for questions
        let pQueList = cloneDeep(questions);
        for (let qInd = 0; qInd < size(pQueList); qInd++) {
            const currQue = pQueList[qInd];
            // add answer count for sorting
            currQue.ansCount = size(currQue.answer);
            // add answer total upvotes
            let ansUpvoteCount = 0;
            let ansMostRecentDate = Infinity;
            let ansOldestDate = 0;
            for (let ansInd = 0; ansInd < size(currQue.answer); ansInd++) {
                const currAns = currQue.answer[ansInd];
                ansUpvoteCount += currAns.good;
                if (Number(currAns.date) < ansMostRecentDate)
                    ansMostRecentDate = Number(currAns.date);
                if (Number(currAns.date) > ansOldestDate)
                    ansOldestDate = Number(currAns.date);
            }
            currQue.ansUpvoteCount = ansUpvoteCount;
            currQue.ansMostRecentDate = ansMostRecentDate;
            currQue.ansOldestDate = ansOldestDate;
        }
        // sort by Most Recent Questions
        pQueList = sortBy(pQueList, [
            function (d) {
                return Number(d.date);
            }
        ]);
        // setup fuse search
        const options = {
            findAllMatches: true,
            ignoreLocation: true,
            minMatchCharLength: 2,
            keys: ['content', 'answer.content']
        };
        fuseSearch.current = new Fuse(pQueList, options);
        dispatch({ type: 'UPDATE_QUESTIONS', payload: pQueList });
    }, [questions, dispatch]);

    const handleQueExpandToggle = useCallback(
        queIndex => {
            const newSet = new Set(expandedQuestions);
            if (newSet.has(queIndex)) newSet.delete(queIndex);
            else newSet.add(queIndex);
            setExpandedQuestions(newSet);
        },
        [expandedQuestions, setExpandedQuestions]
    );

    const toggleExpandAll = useCallback(() => {
        const nextState = expandBtnState
            ? new Set([])
            : new Set(range(0, queData.questions.length));
        setExpandedQuestions(nextState);
        setExpandBtnState(expBtnState => !expBtnState);
    }, [queData, setExpandedQuestions, expandBtnState, setExpandBtnState]);

    const handleResetSearch = useCallback(() => {
        setSearchToken('');
    }, []);

    // expand or collapse on click
    const handleSortClick = () => {
        setExpanded(!expanded);
    };

    const onQuestionVoteSuccess = useCallback(
        (questionId, countType, count) => {
            dispatch(updateQuestionCountAction(questionId, countType, count));
        },
        []
    );

    const onAnswerVoteSuccess = useCallback(
        (questionId, answerId, countType, count) => {
            dispatch(
                updateAnswerCountAction(questionId, answerId, countType, count)
            );
        },
        []
    );

    // click event for menu items
    const handleItemClick = useCallback(
        sortAttribute => {
            setSortBy(sortAttribute);
            setExpanded(false);
            let sortedQuestions = [];
            // sort questions by
            switch (sortAttribute.value) {
                case '1': // sort by Most Recent Questions
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return Number(d.date);
                        }
                    ]);
                    break;
                case '2': // Sort by Oldest questions
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return Number(d.date) * -1;
                        }
                    ]);
                    break;
                case '3': // Questions With The Most Helpful Answers
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return d.ansUpvoteCount * -1;
                        }
                    ]);
                    break;
                case '4': // Questions With Most Recent Answers
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return d.ansMostRecentDate;
                        }
                    ]);
                    break;
                case '5': // Questions With  Oldest Answers
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return d.ansOldestDate * -1;
                        }
                    ]);
                    break;
                case '6': // Questions With Most Answers
                    sortedQuestions = sortBy(queData.questions, [
                        function (d) {
                            return d.ansCount * -1;
                        }
                    ]);
                    break;
            }
            dispatch({ type: 'UPDATE_QUESTIONS', payload: sortedQuestions });
        },
        [setExpanded, setSortBy, dispatch, queData]
    );

    const searchedQuestions = useMemo(() => {
        let result;
        if (searchToken.length > 2) {
            result = fuseSearch.current.search(searchToken);
            return result.map(d => d.item);
        } else {
            return queData.questions;
        }
    }, [searchToken, queData]);

    const sortElements = useMemo(() => {
        // should be not render item in collapsed mode.
        if (!expanded) {
            return null;
        }

        const itemElements = sortOptions.map((sortItem, ind) => {
            return (
                <li
                    key={ind}
                    className={classes.sortingItem}
                    onClick={() => handleItemClick(sortItem)}
                >
                    <span>{sortItem.label}</span>
                </li>
            );
        });

        return (
            <div className={classes.sortingItemWrapper}>
                <ul className={classes.sortingItems}>{itemElements}</ul>
            </div>
        );
    }, [expanded, handleItemClick]);

    return (
        <div className={classes.qaContent}>
            <div className={classes.qaPanelBody}>
                <div className={classes.panelHeader}>
                    <div className={classes.qaSearchWrapper}>
                        <label
                            className={[
                                classes.label,
                                classes.searchLabel
                            ].join(' ')}
                        >
                            Search Q/A
                        </label>
                        <div className={classes.control}>
                            <input
                                type="text"
                                placeholder="Search Phrase"
                                value={searchToken}
                                onChange={e => setSearchToken(e.target.value)}
                            />
                            <Button
                                className={classes.resetButton}
                                onClick={handleResetSearch}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                    <div className={classes.toolbarWrapper}>
                        <div className={classes.sorting} ref={elementRef}>
                            <label
                                className={[
                                    classes.label,
                                    classes.sortLabel
                                ].join(' ')}
                            >
                                Sort By
                            </label>
                            {/* default sorted option */}
                            <div className={classes.sortingOptionsWrapper}>
                                <div className={classes.sortingOptions}>
                                    <Button
                                        className={classes.sortingButton}
                                        onClick={handleSortClick}
                                    >
                                        {userSelectedSort.label}
                                    </Button>
                                    {sortElements}
                                </div>
                                {expandBtnState ? (
                                    <Button
                                        onClick={toggleExpandAll}
                                        className={classes.expandAll}
                                    >
                                        <span>Collapse All</span>
                                        <i className={classes.iconWrapper}>
                                            <svg
                                                className={classes.svgIcon}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                            >
                                                <title>collapse</title>
                                                <path d="M7.405 15.429h17.191v1.143h-17.191v-1.143z" />
                                            </svg>
                                        </i>
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={toggleExpandAll}
                                        className={classes.expandAll}
                                    >
                                        <span>Expand All</span>
                                        <i className={classes.iconWrapper}>
                                            <svg
                                                className={classes.svgIcon}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                            >
                                                <title>expand</title>
                                                <path d="M24.595 15.426h-8.007v-8.022h-1.143v8.022h-8.041v1.143h8.041v8.026h1.143v-8.026h8.007z" />
                                            </svg>
                                        </i>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {searchedQuestions.map((item, index) => {
                    const ansCount = size(item.answer);
                    let queClass = expandedQuestions.has(index)
                        ? `${classes.question} ${classes.question_open}`
                        : classes.question;
                    const onUpvoteSuccess = partial(
                        onQuestionVoteSuccess,
                        item.id,
                        'good'
                    );
                    const onDownvoteSuccess = partial(
                        onQuestionVoteSuccess,
                        item.id,
                        'bad'
                    );

                    return (
                        <div key={item.id} className={classes.questionWrapper}>
                            <div className={queClass}>
                                <div className={classes.listItemWrapper}>
                                    <div className={classes.listItem}>
                                        <div className={classes.leftBlock}>
                                            <div
                                                className={classes.listContent}
                                                onClick={() =>
                                                    handleQueExpandToggle(index)
                                                }
                                            >
                                                <i
                                                    className={
                                                        classes.iconWrapper
                                                    }
                                                >
                                                    <svg
                                                        className={
                                                            classes.svgIcon
                                                        }
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="11"
                                                        height="32"
                                                        viewBox="0 0 11 32"
                                                    >
                                                        <title>next</title>
                                                        <path d="M10.625 17.438q0 0.094-0.047 0.203t-0.141 0.203l-8.313 8.313q-0.094 0.094-0.203 0.141t-0.203 0.047q-0.125 0-0.234-0.047t-0.172-0.141l-0.906-0.875q-0.063-0.094-0.125-0.203t-0.063-0.234q0-0.094 0.063-0.203t0.125-0.203l7.031-7-7.031-7.031q-0.063-0.063-0.125-0.188t-0.063-0.219 0.063-0.219 0.125-0.188l0.906-0.906q0.063-0.063 0.172-0.109t0.234-0.047q0.094 0 0.203 0.047t0.203 0.109l8.313 8.344q0.094 0.063 0.141 0.172t0.047 0.234v0z" />
                                                    </svg>
                                                </i>
                                                <RichText
                                                    content={item.content}
                                                />
                                            </div>
                                            <div className={classes.count}>
                                                {ansCount > 1
                                                    ? `${ansCount} answers`
                                                    : `${ansCount} answer`}
                                            </div>
                                            <div className={classes.nickName}>
                                                by <RichText content={item.nickname} classes={{
                                                    root: classes.nickNameRoot
                                                }} />
                                            </div>
                                            <div className={classes.count}>
                                                {getDateString(item.date)}
                                            </div>
                                        </div>
                                        <div className={classes.rightBlock}>
                                            <div
                                                className={[
                                                    classes.helper,
                                                    classes.plus
                                                ].join(' ')}
                                            >
                                                <PlusBlock
                                                    count={item.good}
                                                    mutation={
                                                        questionRatingPlusMutation
                                                    }
                                                    queryType="questionRatingPlus"
                                                    onSuccess={onUpvoteSuccess}
                                                    variables={{
                                                        question_id: item.id
                                                    }}
                                                    history={history}
                                                    isSignedIn={isSignedIn}
                                                />
                                            </div>
                                            <div
                                                className={[
                                                    classes.helper,
                                                    classes.minus
                                                ].join(' ')}
                                            >
                                                <MinusBlock
                                                    count={item.bad}
                                                    mutation={
                                                        questionRatingMinusMutation
                                                    }
                                                    queryType="questionRatingMinus"
                                                    onSuccess={
                                                        onDownvoteSuccess
                                                    }
                                                    variables={{
                                                        question_id: item.id
                                                    }}
                                                    history={history}
                                                    isSignedIn={isSignedIn}
                                                />
                                            </div>
                                            <div
                                                className={[
                                                    classes.helper,
                                                    classes.reportBlock
                                                ].join(' ')}
                                            >
                                                <ReportBlock
                                                    mutation={
                                                        reportQuestionMutation
                                                    }
                                                    variables={{
                                                        question_id: item.id
                                                    }}
                                                    history={history}
                                                    isSignedIn={isSignedIn}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.answer}>
                                        <AddAnswer questionId={item.id}
                                            wrapperClass={classes.actionToolbar}
                                            ansContent={!!ansCount
                                                ? item.answer.map(ans => {
                                                    const onAnsUpvoteSuccess = partial(
                                                        onAnswerVoteSuccess,
                                                        item.id,
                                                        ans.id,
                                                        'good'
                                                    );
                                                    const onAnsDownvoteSuccess = partial(
                                                        onAnswerVoteSuccess,
                                                        item.id,
                                                        ans.id,
                                                        'bad'
                                                    );
                                                    return (
                                                        <div
                                                            key={ans.id}
                                                            className={
                                                                classes.anslistItemWrapper
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    classes.answerListItem
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        classes.listContent
                                                                    }
                                                                >
                                                                    <RichText
                                                                        content={
                                                                            replaceSpecialChars(ans.content)
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className={
                                                                    classes.answerListHelper
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        classes.nickName
                                                                    }
                                                                >
                                                                    by <RichText content={ans.nickname} classes={{
                                                                        root: classes.nickNameRoot
                                                                    }} />
                                                                </div>
                                                                <div
                                                                    className={
                                                                        classes.count
                                                                    }
                                                                >
                                                                    {getDateString(
                                                                        ans.date
                                                                    )}
                                                                </div>
                                                                <div
                                                                    className={[
                                                                        classes.helper,
                                                                        classes.plus
                                                                    ].join(' ')}
                                                                >
                                                                    <PlusBlock
                                                                        count={
                                                                            ans.good
                                                                        }
                                                                        queryType="answerRatingPlus"
                                                                        onSuccess={
                                                                            onAnsUpvoteSuccess
                                                                        }
                                                                        mutation={
                                                                            answerRatingPlusMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id:
                                                                                ans.id
                                                                        }}
                                                                        history={
                                                                            history
                                                                        }
                                                                        isSignedIn={
                                                                            isSignedIn
                                                                        }
                                                                    />
                                                                </div>
                                                                <div
                                                                    className={[
                                                                        classes.helper,
                                                                        classes.minus
                                                                    ].join(' ')}
                                                                >
                                                                    <MinusBlock
                                                                        count={
                                                                            ans.bad
                                                                        }
                                                                        queryType="answerRatingMinus"
                                                                        onSuccess={
                                                                            onAnsDownvoteSuccess
                                                                        }
                                                                        mutation={
                                                                            answerRatingMinusMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id:
                                                                                ans.id
                                                                        }}
                                                                        history={
                                                                            history
                                                                        }
                                                                        isSignedIn={
                                                                            isSignedIn
                                                                        }
                                                                    />
                                                                </div>
                                                                <div
                                                                    className={[
                                                                        classes.helper,
                                                                        classes.reportBlock
                                                                    ].join(' ')}
                                                                >
                                                                    <ReportBlock
                                                                        mutation={
                                                                            reportAnswerMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id:
                                                                                ans.id
                                                                        }}
                                                                        history={
                                                                            history
                                                                        }
                                                                        isSignedIn={
                                                                            isSignedIn
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                                : null
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * Main wrapper component for Product QA
 * 1. get storeConfig
 * 2. get productQAConfiguration using store id and website id
 * 3. get allow_subscribing_question and forward to ProductQuestionsBlock
 */
const ProductQuestionsBlockWrapper = ({ productId }) => {
    const { loading, data, error } = useQuery(getStoreConfig);
    const [
        configuration,
        { loading: confLoading, data: confData, error: confError }
    ] = useLazyQuery(getProductQAConfiguration, {
        fetchPolicy: 'cache-and-network'
    });

    useEffect(async () => {
        const storeConfig = get(data, 'storeConfig', {});
        if (size(storeConfig)) {
            try {
                configuration({
                    variables: {
                        storeId: storeConfig.id,
                        websiteId: storeConfig.website_id
                    }
                });
            } catch (error) { }
        }
    }, [data]);
    if (loading || error) return null;

    const allowSubscribingQuestion = !!get(
        confData,
        'productQAConfiguration.allow_subscribing_question',
        false
    );

    if (loading || confLoading) {
        return <div>Loading</div>;
    } else if (size(error)) {
        return <div>Failed to fetch store configuration</div>;
    } else if (size(confError)) {
        return <div>Failed to fetch QA configuration</div>;
    } else {
        return (
            <ProductQuestionsBlock
                productId={productId}
                allowSubscribingQuestion={allowSubscribingQuestion}
            />
        );
    }
};

export default ProductQuestionsBlockWrapper;
