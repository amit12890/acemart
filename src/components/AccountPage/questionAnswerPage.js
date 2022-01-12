import React from 'react';

import defaultClasses from './questionAnswerPage.css';
import { useStyle } from '../../venia/classify';
import Button from '../../venia/components/Button';

export default () => {
    const classes = useStyle(defaultClasses)

    return (

        <div className={classes.root}>
            <div className={classes.pageTitleWrapper}>
                <h1 className={classes.title}>
                    My Question/Answer
                </h1>
            </div>
            <div className={[classes.panelWrapper, classes.quesitonWrapper].join(" ")}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>My Questions</h2>
                    <div className={classes.filterRow}>
                        <span className={classes.pageInfo}>Showing 2 of 2</span>
                    </div>
                    <ul className={classes.qalistItems}>
                        <li className={[classes.item, classes.itemQuesiton].join(" ")}>
                            <div className={[classes.stackedCell, classes.postedon].join(" ")}>
                                <span className={classes.label}>
                                    Posted On
                                </span>
                                <span className={classes.value}>01/12/2022</span>
                            </div>

                            <div className={[classes.stackedCell, classes.productName].join(" ")}>
                                <span className={classes.label}>
                                    Product Name
                                </span>
                                <span className={classes.value}>
                                    <a className={classes.action} href="#">
                                        Designer Slim Line 36-1/4" Four Half Door Reach In Refrigerator w/ Stainless Interior & Shallow Depth
                                    </a>
                                </span>
                            </div>

                            <div className={[classes.stackedCell, classes.productQuestion].join(" ")}>
                                <span className={classes.label}>
                                    Question
                                </span>
                                <span className={classes.value}>What are the Dimension of the Watch</span>
                            </div>
                            <div className={[classes.stackedCell, classes.status].join(" ")}>
                                <span className={classes.label}>
                                    Status
                                </span>
                                <span className={classes.value}>
                                    <span className={classes.replyAnswer}>1 Answer</span>
                                    <a className={classes.action} href="#">View Details</a>
                                </span>
                            </div>

                        </li>

                        <li className={[classes.item, classes.itemQuesiton].join(" ")}>
                            <div className={[classes.stackedCell, classes.postedon].join(" ")}>
                                <span className={classes.label}>
                                    Posted On
                                </span>
                                <span className={classes.value}>01/12/2022</span>
                            </div>

                            <div className={[classes.stackedCell, classes.productName].join(" ")}>
                                <span className={classes.label}>
                                    Product Name
                                </span>
                                <span className={classes.value}>
                                    <a className={classes.action} href="#">
                                        Designer Slim Line 36-1/4" Four Half Door Reach In Refrigerator w/ Stainless Interior & Shallow Depth
                                    </a>
                                </span>
                            </div>

                            <div className={[classes.stackedCell, classes.productQuestion].join(" ")}>
                                <span className={classes.label}>
                                    Question
                                </span>
                                <span className={classes.value}>What are the Dimension of the Watch</span>
                            </div>
                            <div className={[classes.stackedCell, classes.status].join(" ")}>
                                <span className={classes.label}>
                                    Status
                                </span>
                                <span className={classes.value}>
                                    <span className={classes.replyAnswer}>1 Answer</span>
                                    <a className={classes.action} href="#">View Details</a>
                                </span>
                            </div>

                        </li>
                    </ul>
                    <div className={classes.actionToolbar}>
                        <div className={classes.primary}>
                            <Button
                                classes={{ root_lowPriority: classes.loadMoreButton }}
                                priority="low"
                            >
                                Load More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={[classes.panelWrapper, classes.answerWrapper].join(" ")}>
                <div className={classes.panelBody}>
                    <h2 className={classes.panelBodyTitle}>My Answer</h2>
                    <div className={classes.filterRow}>
                        <span className={classes.pageInfo}>Showing 1 of 1</span>
                    </div>
                    <ul className={classes.qalistItems}>
                        <li className={[classes.item, classes.itemAnswer].join(" ")}>
                            <div className={[classes.stackedCell, classes.postedon].join(" ")}>
                                <span className={classes.label}>
                                    Posted On
                                </span>
                                <span className={classes.value}>01/12/2022</span>
                            </div>

                            <div className={[classes.stackedCell, classes.productName].join(" ")}>
                                <span className={classes.label}>
                                    Product Name
                                </span>
                                <span className={classes.value}>
                                    <a className={classes.action} href="#">
                                        Designer Slim Line 36-1/4" Four Half Door Reach In Refrigerator w/ Stainless Interior & Shallow Depth
                                    </a>
                                </span>
                            </div>

                            <div className={[classes.stackedCell, classes.productQuestion].join(" ")}>
                                <span className={classes.label}>
                                    Question
                                </span>
                                <span className={classes.value}>What are the Dimension of the Watch</span>
                            </div>
                            <div className={[classes.stackedCell, classes.productAnswer].join(" ")}>
                                <span className={classes.label}>
                                    Answer
                                </span>
                                <span className={classes.value}>What are the Dimension of the Watch</span>
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


                    </ul>


                </div>
            </div>

        </div>
    )
}