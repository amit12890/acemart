import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import { size } from 'lodash';
import { number, shape, string } from 'prop-types';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import RichContent from '../../venia/components/RichContent';
import CategoryList from '@magento/venia-ui/lib/components/CategoryList';
import { Meta, Title } from '@magento/venia-ui/lib/components/Head';
import { useStyle } from '../../venia/classify';

import defaultClasses from './cms.css';
import { updateAppState } from '../../data/appState/appState.action';
import CmsContent from './cmsContent';
import { useCmsPage } from '../../magento/peregrine/talons/Cms/useCmsPage';

const CMSPage = props => {
    const { id } = props;
    const dispatch = useDispatch();
    const talonProps = useCmsPage({ id: Number(id) });
    const {
        cmsPage,
        hasContent,
        rootCategoryId,
        shouldShowLoadingIndicator
    } = talonProps;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);

    /**
     * isCMS flag status updated added on component create
     * and destory
     *
     *  reducer: appState
     */
    useEffect(() => {
        dispatch(updateAppState({ isCMS: true }));
        return () => {
            dispatch(updateAppState({ isCMS: false }));
        };
    }, []);

    useEffect(() => {
        if (hasContent) {
            const scriptList = document.getElementsByClassName('reactScript');
            console.log("🚀 ~ file: cms.js ~ line 47 ~ useEffect ~ scriptList", scriptList)
            for (let index = 0; index < size(scriptList); index++) {
                const script = scriptList[index].innerHTML;
                window.eval(script);
            }
        }
    }, [hasContent])

    if (shouldShowLoadingIndicator) {
        return fullPageLoadingIndicator;
    }

    if (hasContent) {
        const {
            content_heading,
            title,
            meta_title,
            meta_description,
            content,
            url_key
        } = cmsPage;

        const headingElement =
            content_heading !== '' ? (
                <h1 className={classes.heading}>{content_heading}</h1>
            ) : null;

        if (url_key === 'store-locator') {
            return (
                <Fragment>
                    <Title>{meta_title}</Title>
                    <Meta name="title" content={meta_title} />
                    <Meta name="description" content={meta_description} />
                    <CmsContent />
                </Fragment>
            );
        }
        return (
            <Fragment>
                <Title>{meta_title}</Title>
                <Meta name="title" content={meta_title} />
                <Meta name="description" content={meta_description} />
                {headingElement}
                <div className={classes.cmswrapper}>
                    <RichContent
                        classes={{
                            root: classes.test
                        }}
                        html={content}
                    />
                </div>
            </Fragment>
        );
    }

    // Fallback to a category list if there is no cms content.
    return (
        <CategoryList
            title={formatMessage({
                id: 'cms.shopByCategory',
                defaultMessage: 'Shop by category'
            })}
            id={rootCategoryId}
        />
    );
};

CMSPage.propTypes = {
    id: number,
    classes: shape({
        heading: string
    })
};

export default CMSPage;
