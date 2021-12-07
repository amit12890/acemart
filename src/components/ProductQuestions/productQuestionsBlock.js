import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import { useQuery } from '@apollo/client';
import Fuse from 'fuse.js';
import { get, size, range } from 'lodash';

import { useStyle } from '@magento/venia-ui/lib/classify';
import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';

import Button from '../../venia/components/Button';
import defaultClasses from './productQuestions.css';
import AddQuestion from './addQuestion';
import AddAnswer from './addAnswer';
import PlusBlock from './plusBlock';
import MinusBlock from './minusBlock';
import ReportBlock from './reportBlock';

import {
    getProductQuestions,
    questionRatingPlusMutation,
    answerRatingPlusMutation,
    questionRatingMinusMutation,
    answerRatingMinusMutation,
    reportQuestionMutation,
    reportAnswerMutation
} from './productQuestions.gql';
import { getDateString } from './utils';

const sortOptions = [
    { value: '7', label: 'Most Recent Questions' },
    { value: '8', label: 'Oldest Questions' },
    { value: '9', label: 'Questions With The Most Helpful Answers' },
    { value: '10', label: 'Questions With Most Recent Answers' },
    { value: '11', label: 'Questions With  Oldest Answers' },
    { value: '12', label: 'Questions With Most Answers' },
];

const ProductQuestionsBlock = ({ productId }) => {
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
            <AddQuestion productId={productId} />
        </div>
    );
};

const QuestionBlock = ({ questions }) => {
    const { elementRef, expanded, setExpanded } = useDropdown();

    const classes = useStyle(defaultClasses);
    // false : Next click will expand; in default state
    const [expandBtnState, setExpandBtnState] = useState(false)
    const [expandedQuestions, setExpandedQuestions] = useState(new Set([]));
    const [searchToken, setSearchToken] = useState('');
    const [sortBy, setSortBy] = useState(sortOptions[0])
    const fuseSearch = useRef();

    useEffect(() => {
        // setup fuse search
        const options = {
            findAllMatches: true,
            ignoreLocation: true,
            minMatchCharLength: 2,
            keys: [
                'content',
                'answer.content',
            ],
        };
        fuseSearch.current = new Fuse(questions, options);
    }, [questions]);

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
        const nextState = expandBtnState ? new Set([]) : new Set(range(0, questions.length))
        setExpandedQuestions(nextState);
        setExpandBtnState(expBtnState => !expBtnState)
    }, [questions, setExpandedQuestions, expandBtnState, setExpandBtnState]);

    const handleResetSearch = useCallback(() => {
        setSearchToken('');
    }, []);

    const filteredQuestions = useMemo(() => {
        if (searchToken.length > 2) {
            const result = fuseSearch.current.search(searchToken);
            return result.map((d) => d.item)
        } else {
            return questions;
        }
    }, [searchToken, questions]);

    // expand or collapse on click
    const handleSortClick = () => {
        setExpanded(!expanded);
    };

    // click event for menu items
    const handleItemClick = useCallback(
        sortAttribute => {
            setSortBy(sortAttribute)
            setExpanded(false);
        },
        [setExpanded]
    );

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
                    <span>
                        {sortItem.label}
                    </span>
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
                        <label className={[classes.label, classes.searchLabel].join(" ")}>Search Q/A</label>
                        <div className={classes.control}>
                            <input
                                type="text"
                                placeholder="Search Phrase"
                                value={searchToken}
                                onChange={e => setSearchToken(e.target.value)}
                            />
                            <Button
                                className={classes.resetButton}
                                onClick={handleResetSearch}>Reset</Button>
                        </div>
                    </div>
                    <div className={classes.toolbarWrapper}>
                        <div className={classes.sorting} ref={elementRef}>
                            <label className={[classes.label, classes.sortLabel].join(" ")}>Sort By</label>
                            {/* default sorted option */}
                            <div className={classes.sortingOptionsWrapper}>
                                <div className={classes.sortingOptions}>
                                    <Button
                                        className={classes.sortingButton}
                                        onClick={handleSortClick}>{sortBy.label}</Button>
                                    {sortElements}
                                </div>
                                {expandBtnState ?
                                    <Button
                                        onClick={toggleExpandAll}
                                        className={classes.expandAll}
                                    >
                                        <span>Collapse All</span>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.store].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>store</title>
                                                <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2zM16 0h2l16 10v2h-34v-2z"></path>                                            </svg>
                                        </i>
                                    </Button>
                                    :
                                    <Button
                                        onClick={toggleExpandAll}
                                        className={classes.expandAll}
                                    >
                                        <span>Expand All</span>
                                        <i className={classes.iconWrapper}>
                                            <svg className={[classes.svgIcon, classes.store].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                                <title>store</title>
                                                <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2zM16 0h2l16 10v2h-34v-2z"></path>                                            </svg>
                                        </i>
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>


                {
                    filteredQuestions.map((item, index) => {
                        const ansCount = size(item.answer);
                        let queClass = expandedQuestions.has(index)
                            ? `${classes.question} ${classes.question_open}`
                            : classes.question;

                        return (
                            <div key={item.id} className={classes.questionWrapper}>
                                <div className={queClass}>
                                    <div className={classes.listItemWrapper}>
                                        <div className={classes.listItem}
                                            onClick={() => handleQueExpandToggle(index)}
                                        >
                                            <div className={classes.leftBlock}>
                                                <div className={classes.listContent}>{item.content}</div>
                                                <div className={classes.count}>
                                                    {ansCount > 1
                                                        ? `${ansCount} answers`
                                                        : `${ansCount} answer`}
                                                </div>
                                                <div className={classes.nickName}>by {item.nickname}</div>
                                                <div className={classes.count}>{getDateString("1050")}</div>
                                            </div>
                                            <div className={classes.rightBlock}>
                                                <div className={[classes.helper, classes.plus].join(" ")}>
                                                    <PlusBlock count={item.good}
                                                        mutation={questionRatingPlusMutation}
                                                        variables={{
                                                            question_id: item.id
                                                        }}
                                                    />
                                                </div>
                                                <div className={[classes.helper, classes.minus].join(" ")}>
                                                    <MinusBlock count={item.bad}
                                                        mutation={questionRatingMinusMutation}
                                                        variables={{
                                                            question_id: item.id
                                                        }}
                                                    />
                                                </div>
                                                <div className={[classes.helper, classes.reportBlock].join(" ")} >
                                                    <ReportBlock
                                                        mutation={reportQuestionMutation}
                                                        variables={{
                                                            question_id: item.id
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.answer}>

                                            <div className={classes.actionToolbar}>
                                                <AddAnswer questionId={item.id} />
                                            </div>
                                            {!!ansCount
                                                ? item.answer.map((ans) => {
                                                    return (
                                                        <div key={ans.id} className={classes.anslistItemWrapper}>
                                                            <div className={classes.answerListItem}>
                                                                <div className={classes.listContent}>{ans.content}</div>
                                                            </div>
                                                            <div className={classes.answerListHelper}>
                                                                <div className={classes.nickName}>by {ans.nickname}</div>
                                                                <div className={[classes.helper, classes.plus].join(" ")}>
                                                                    <PlusBlock count={ans.good}
                                                                        mutation={
                                                                            answerRatingPlusMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id: ans.id
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className={[classes.helper, classes.minus].join(" ")}>
                                                                    <MinusBlock count={ans.bad}
                                                                        mutation={
                                                                            answerRatingMinusMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id: ans.id
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className={[classes.helper, classes.reportBlock].join(" ")} >
                                                                    <ReportBlock
                                                                        mutation={
                                                                            reportAnswerMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id: ans.id
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                                : null}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div >
    );
};

export default ProductQuestionsBlock;
