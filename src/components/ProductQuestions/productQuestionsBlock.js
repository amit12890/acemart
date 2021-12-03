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

import Button from '../../venia/components/Button';
import { useStyle } from '@magento/venia-ui/lib/classify';
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
    const classes = useStyle(defaultClasses);
    const [expandedQuestions, setExpandedQuestions] = useState(new Set([]));
    const [searchToken, setSearchToken] = useState('');
    const fuseSearch = useRef();

    useEffect(() => {
        // setup fuse search
        const options = {
            shouldSort: true,
            // tokenize: true,
            findAllMatches: true,
            threshold: 0.8,
            location: 0,
            distance: 32,
            maxPatternLength: 32,
            minMatchCharLength: 2,
            keys: ['content']
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
        setExpandedQuestions(expQue =>
            expQue.size ? new Set([]) : new Set(range(0, questions.length))
        );
    }, [questions, setExpandedQuestions]);

    const handleResetSearch = useCallback(() => {
        setSearchToken('');
    }, []);

    const filteredQuestions = useMemo(() => {
        if (searchToken.length > 2) {
            return fuseSearch.current.search(searchToken);
        } else {
            return questions;
        }
    }, [searchToken, questions]);

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
                            <Button onClick={handleResetSearch}>Reset</Button>
                        </div>
                    </div>
                    <div className={classes.toolbarWrapper}>
                        <label className={[classes.label, classes.sortLabel].join(" ")}>Sort By</label>
                        <Button onClick={toggleExpandAll}>
                            <i className={classes.iconWrapper}>
                                <svg className={[classes.svgIcon, classes.store].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                                    <title>store</title>
                                    <path d="M32 30v-2h-2v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-6v-12h2v-2h-6v2h2v12h-2v2h-2v2h34v-2h-2zM16 0h2l16 10v2h-34v-2z"></path>                                            </svg>
                            </i>
                            <span>Expand All</span>
                        </Button>
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
                                <div
                                    className={queClass}
                                    onClick={() => handleQueExpandToggle(index)}
                                >
                                    <div className={classes.listItemWrapper}>
                                        <div className={classes.listItem}>
                                            <div className={classes.leftBlock}>
                                                <div className={classes.listContent}>{item.content}</div>
                                                <div className={classes.count}>
                                                    {ansCount > 1
                                                        ? `${ansCount} answers`
                                                        : `${ansCount} answer`}
                                                </div>
                                                <div className={classes.nickName}>by {item.nickname}</div>
                                            </div>
                                            <div className={classes.rightBlock}>
                                                <div className={[classes.helper, classes.plus].join(" ")}>
                                                    <PlusBlock
                                                        mutation={questionRatingPlusMutation}
                                                        variables={{
                                                            question_id: item.id
                                                        }}
                                                    />
                                                </div>
                                                <div className={[classes.helper, classes.minus].join(" ")}>
                                                    <MinusBlock
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
                                                ? item.answer.map((ans, ind) => {
                                                    return (
                                                        <div key={ans.id} className={classes.anslistItemWrapper}>
                                                            <div className={classes.answerListItem}>
                                                                <div className={classes.listContent}>{ans.content}</div>
                                                            </div>
                                                            <div className={classes.answerListHelper}>
                                                                <div className={classes.nickName}>by {ans.nickname}</div>
                                                                <div className={[classes.helper, classes.plus].join(" ")}>
                                                                    <PlusBlock
                                                                        mutation={
                                                                            answerRatingPlusMutation
                                                                        }
                                                                        variables={{
                                                                            ans_id: ans.id
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className={[classes.helper, classes.minus].join(" ")}>
                                                                    <MinusBlock
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
