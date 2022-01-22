import React from 'react';

import defaultClasses from './questionAnswerPage.css';
import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';
import { useMyQuestionAnswer } from '../../magento/peregrine/talons/MyQuestionAnswer/useMyQuestionAnswer';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import { format } from 'date-fns';
import QaPerPage from './questionAnswerPerPage';
import { size } from 'lodash';
import Pagination from '../../venia/components/Pagination';
import { useIntl } from 'react-intl';
import { Title, Meta } from '@magento/venia-ui/lib/components/Head';

export default () => {
    const classes = useStyle(defaultClasses)
    const { formatMessage } = useIntl();

    const talonProps = useMyQuestionAnswer();
    const {
        questions,
        answers,
        loading,
        error,
        pageSize,
        setPageSize,
        quePage,
        queTotalPage,
        ansPage,
        ansTotalPage,
        setQuePage,
        setAnsPage,
    } = talonProps

    if (loading) {
        return (
            <div className={classes.root}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>
                        My Question/Answer
                    </h1>
                </div>
                {fullPageLoadingIndicator}
            </div>
        )
    } else if(error) {
        return (
            <div className={classes.root}>
                <div className={classes.pageTitleWrapper}>
                    <h1 className={classes.title}>
                        My Question/Answer
                    </h1>
                </div>
                <h3>Failed to fetch data</h3>
            </div>
        )
    }

    const questionSize = size(questions)
    const ansSize = size(answers)
    const quaHeading = questionSize > 1 ? `${questionSize} Items` : `${questionSize} Item`
    const ansHeading = ansSize > 1 ? `${ansSize} Items` : `${ansSize} Item`

    return (

        <div className={classes.root}>
            <Title>{formatMessage({ id: "questionAnsPage.title" })}</Title>
            <Meta
                name="description"
                content={formatMessage({ id: "landingPage.description" })}
            />
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    My Question/Answer
                </h1>
            </div>
            <div className={[classes.panelWrapper, classes.quesitonWrapper].join(" ")}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>My Questions</h2>
                    {questionSize ?
                        <>
                            <div className={classes.filterRow}>
                                <span className={classes.pageInfo}>{quaHeading}</span>
                                <QaPerPage pageSize={pageSize} pageSizeSelect={setPageSize} />
                            </div>
                            <ul className={classes.qalistItems}>
                                {questions.map((que) => {
                                    const statusText = que.status === "4" 
                                        ? "Pending": que.status === "5" 
                                        ? `${que.answers} ${que.answers > 1 ? "Answers" : "Answer"}`: ""
                                    return (
                                        <li className={[classes.item, classes.itemQuesiton].join(" ")} key={que.id}>
                                            <div className={[classes.stackedCell, classes.postedon].join(" ")}>
                                                <span className={classes.label}>
                                                    Posted On
                                                </span>
                                                <span className={classes.value}>
                                                    {format(new Date(que.created_datetime), "dd/MM/yyyy")}
                                                </span>
                                            </div>

                                            <div className={[classes.stackedCell, classes.productName].join(" ")}>
                                                <span className={classes.label}>
                                                    Product Name
                                                </span>
                                                <span className={classes.value}>
                                                    <a className={classes.action} href="#">
                                                        {que.product_name}
                                                    </a>
                                                </span>
                                            </div>

                                            <div className={[classes.stackedCell, classes.productQuestion].join(" ")}>
                                                <span className={classes.label}>
                                                    Question
                                                </span>
                                                <span className={classes.value}>
                                                    {que.content}
                                                </span>
                                            </div>
                                            <div className={[classes.stackedCell, classes.status].join(" ")}>
                                                <span className={classes.label}>
                                                    Status
                                                </span>
                                                <span className={classes.value}>
                                                    <span className={classes.replyAnswer}>
                                                        {statusText}
                                                    </span>
                                                    <a className={classes.action} href="#">View Details</a>
                                                </span>
                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                        :
                        <div className={classes.noResultText}>
                            <i className={classes.iconWrapper}>
                                <svg className={[classes.svgIcon, classes.checkmark].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>warning</title>
                                    <path d="M18.281 24.844v-3.406q0-0.219-0.156-0.406t-0.406-0.188h-3.438q-0.25 0-0.406 0.188t-0.156 0.406v3.406q0 0.25 0.156 0.422t0.406 0.172h3.438q0.25 0 0.406-0.172t0.156-0.422zM18.25 18.156l0.313-8.188q0-0.094-0.031-0.188t-0.125-0.156-0.203-0.125-0.234-0.063h-3.938q-0.125 0-0.234 0.063t-0.203 0.125-0.125 0.172-0.031 0.203l0.281 8.156q0 0.188 0.188 0.297t0.438 0.109h3.313q0.219 0 0.406-0.109t0.188-0.297v0zM18 1.469l13.719 25.156q0.281 0.531 0.281 1.125t-0.313 1.125-0.844 0.828-1.125 0.297h-27.438q-0.594 0-1.125-0.297t-0.844-0.828-0.313-1.125 0.281-1.125l13.719-25.156q0.281-0.531 0.828-0.859t1.172-0.328 1.172 0.328 0.828 0.859v0z"></path>
                                </svg>
                            </i>
                            <span>You have no questions</span>
                        </div>
                    }
                    <section className={classes.pagination}>
                        <Pagination
                            pageControl={{
                                currentPage: quePage,
                                setPage: setQuePage,
                                totalPages: queTotalPage
                            }}
                        />
                    </section>
                </div>
            </div>

            <div className={[classes.panelWrapper, classes.answerWrapper].join(" ")}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>My Answer</h2>
                    {ansSize ?
                        <>
                            <div className={classes.filterRow}>
                                <span className={classes.pageInfo}>{ansHeading}</span>
                            </div>
                            <ul className={classes.qalistItems}>
                                {answers.map((ans) => {
                                    return (
                                        <li className={[classes.item, classes.itemAnswer].join(" ")} key={ans.id}>
                                            <div className={[classes.stackedCell, classes.postedon].join(" ")}>
                                                <span className={classes.label}>
                                                    Posted On
                                                </span>
                                                <span className={classes.value}>
                                                    {format(new Date(ans.created_datetime), "dd/MM/yyyy")}
                                                </span>
                                            </div>

                                            <div className={[classes.stackedCell, classes.productName].join(" ")}>
                                                <span className={classes.label}>
                                                    Product Name
                                                </span>
                                                <span className={classes.value}>
                                                    <a className={classes.action} href="#">
                                                        {ans.product_name}
                                                    </a>
                                                </span>
                                            </div>

                                            <div className={[classes.stackedCell, classes.productQuestion].join(" ")}>
                                                <span className={classes.label}>
                                                    Question
                                                </span>
                                                <span className={classes.value}>{ans.question}</span>
                                            </div>
                                            <div className={[classes.stackedCell, classes.productAnswer].join(" ")}>
                                                <span className={classes.label}>
                                                    Answer
                                                </span>
                                                <span className={classes.value}>{ans.content}</span>
                                            </div>

                                            <div className={[classes.stackedCell, classes.status].join(" ")}>
                                                <span className={classes.label}>
                                                    Status
                                                </span>
                                                <span className={classes.value}>
                                                    <a className={classes.action} href="#">View Details</a>
                                                </span>
                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                        :
                        <div className={classes.noResultText}>
                            <i className={classes.iconWrapper}>
                                <svg className={[classes.svgIcon, classes.checkmark].join(" ")} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>warning</title>
                                    <path d="M18.281 24.844v-3.406q0-0.219-0.156-0.406t-0.406-0.188h-3.438q-0.25 0-0.406 0.188t-0.156 0.406v3.406q0 0.25 0.156 0.422t0.406 0.172h3.438q0.25 0 0.406-0.172t0.156-0.422zM18.25 18.156l0.313-8.188q0-0.094-0.031-0.188t-0.125-0.156-0.203-0.125-0.234-0.063h-3.938q-0.125 0-0.234 0.063t-0.203 0.125-0.125 0.172-0.031 0.203l0.281 8.156q0 0.188 0.188 0.297t0.438 0.109h3.313q0.219 0 0.406-0.109t0.188-0.297v0zM18 1.469l13.719 25.156q0.281 0.531 0.281 1.125t-0.313 1.125-0.844 0.828-1.125 0.297h-27.438q-0.594 0-1.125-0.297t-0.844-0.828-0.313-1.125 0.281-1.125l13.719-25.156q0.281-0.531 0.828-0.859t1.172-0.328 1.172 0.328 0.828 0.859v0z"></path>
                                </svg>
                            </i>
                            <span>You have no answers </span>
                        </div>
                    }
                    <section className={classes.pagination}>
                        <Pagination
                            pageControl={{
                                currentPage: ansPage,
                                setPage: setAnsPage,
                                totalPages: ansTotalPage
                            }}
                        />
                    </section>
              </div>
            </div>

        </div>
    )
}