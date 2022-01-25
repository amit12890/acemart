import React, { useEffect } from 'react';
import { useErrorContext } from '@magento/peregrine/lib/context/unhandledErrors';
import ReactGA from 'react-ga';

import App from './app';
import { useErrorBoundary } from '@magento/venia-ui/lib/components/App/useErrorBoundary';
import { GOOGLE_ANALYTICS_ID } from '../../../url.utils';

const AppContainer = () => {
    const ErrorBoundary = useErrorBoundary(App);
    const [unhandledErrors, errorApi] = useErrorContext();

    useEffect(() => {
        ReactGA.initialize(GOOGLE_ANALYTICS_ID);
    }, [])

    return <ErrorBoundary unhandledErrors={unhandledErrors} {...errorApi} />;
};

export default AppContainer;
