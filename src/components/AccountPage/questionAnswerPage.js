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

    const quaHeading = size(questions) > 1 ? `${size(questions)} Items` : `${size(questions)} Item`
    const ansHeading = size(answers) > 1 ? `${size(answers)} Items` : `${size(answers)} Item`

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