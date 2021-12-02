import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import Fuse from "fuse.js";
import { get, size, range } from 'lodash';

import Button from '../../venia/components/Button';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './productQuestions.css';
import AddQuestion from './addQuestion';
import AddAnswer from "./addAnswer";
import { getProductQuestions } from './productQuestions.gql';

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
            content = <QuestionBlock questions={questionsData.questions.items} />;
        } else {
            content = <div>Be the first one to ask question.</div>;
        }
    }

    return (
        <div>
            <div>{content}</div>
            <AddQuestion productId={productId} />
        </div>
    );
};

const QuestionBlock = ({ questions }) => {
console.log("🚀 ~ file: productQuestionsBlock.js ~ line 51 ~ QuestionBlock ~ questions", questions)
    const classes = useStyle(defaultClasses);
    const [expandedQuestions, setExpandedQuestions] = useState(new Set([]))
    const [searchToken, setSearchToken] = useState("")
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
            keys: [
                  "content",
              ]
          };
          fuseSearch.current = new Fuse(questions, options);
    }, [questions])

    const handleQueExpandToggle = useCallback((queIndex) => {
        const newSet = new Set(expandedQuestions);
        if (newSet.has(queIndex)) newSet.delete(queIndex);
        else newSet.add(queIndex);
        setExpandedQuestions(newSet)
    }, [expandedQuestions, setExpandedQuestions])

    const toggleExpandAll = useCallback(() => {
        setExpandedQuestions(expQue => expQue.size
            ? new Set([]) : new Set(range(0, questions.length))
        )
    }, [questions, setExpandedQuestions])

    const handleResetSearch = useCallback(() => {
        setSearchToken("");
    }, [])

    const filteredQuestions = useMemo(() => {
        if (searchToken.length > 2) {
          return fuseSearch.current.search(searchToken);
        } else {
          return questions;
        }
      }, [searchToken, questions]);

    return (
        <div>
            <div>
                <label>Search Q/A</label>
                <input placeholder="Search Phrase" value={searchToken}
                    onChange={(e) => setSearchToken(e.target.value)} />
                <Button onClick={handleResetSearch}>Reset</Button>
            </div>
            <div>
                <label>Sort By</label>
                <Button onClick={toggleExpandAll}>Expand All</Button>
            </div>

            {filteredQuestions.map((item, index) => {
                const ansCount = size(item.answer);
                let queClass = expandedQuestions.has(index)
                    ? `${classes.question} ${classes.question_open}` : classes.question

                return (
                    <div key={item.id}>
                        <div className={queClass} onClick={() => handleQueExpandToggle(index)}>
                            <div>{item.content}</div>
                            <div>
                                {ansCount > 1
                                    ? `${ansCount} answers`
                                    : `${ansCount} answer`}
                            </div>
                            <div>by {item.nickname}</div>
                        </div>
                        <div className="answer">
                            <div>
                                {!!ansCount
                                    ? item.answer.map((ans, ind) => {
                                        return (
                                            <div key={ind}>
                                                <div>{ans.content}</div>
                                                <div>by {ans.nickname}</div>
                                            </div>
                                        );
                                    })
                                    : null}
                            </div>
                            <div>
                                <AddAnswer questionId={item.id} />
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
    );
};

export default ProductQuestionsBlock;
