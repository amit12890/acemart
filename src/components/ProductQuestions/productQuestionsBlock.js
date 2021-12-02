import React from 'react';
import { useQuery } from '@apollo/client';

import { get, size } from 'lodash';

// import { useStyle } from '../../classify';
// import defaultClasses from './productFullDetail.css';
import AddQuestion from './addQuestion';
import AddAnswer from "./addAnswer";
import { getProductQuestions } from './productQuestions.gql';

const ProductQuestionsBlock = ({ productId }) => {
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
            content = <QuestionBlock data={questionsData.questions.items} />;
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

const QuestionBlock = ({ data }) => {
    return data.map((item, index) => {
        const ansCount = size(item.answer);
        return (
            <div key={index}>
                <div className="question">
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
        );
    });
};

export default ProductQuestionsBlock;
