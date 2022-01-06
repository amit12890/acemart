import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';

import { useUserContext } from '@magento/peregrine/lib/context/user';
import { size } from 'lodash-es';

export const useApiData = ({
    url = '',
    method = 'get',
    headers = {},
    data = {},
    isLazy = false,
    useAuth = true,
    onSuccess = null
}) => {
    const [{ token }, _] = useUserContext();
    const [loading, setLoading] = useState(!isLazy);
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);

    const callApi = useCallback(
        async (cbUrl = null, data = {}) => {
            setLoading(true);
            try {
                let requestHeaders = { ...headers };
                // auth header will be only passed if token has values
                if (size(token) > 0 && useAuth) {
                    requestHeaders['authorization'] = token
                        ? `Bearer ${token}`
                        : '';
                }
                const response = await Axios({
                    method,
                    url: cbUrl ? cbUrl : url,
                    headers: requestHeaders,
                    data
                });
                setResponse(response.data);
                setLoading(false);
                if (!!onSuccess) onSuccess(response.data);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log('file: data.utils.js ~ line 27 ~ error', error);
            }
        },
        [url, onSuccess, token]
    );

    useEffect(() => {
        // if isLazy call api manually
        // else api will be called as soon as component renders
        if (!isLazy) callApi(data);
    }, []);

    return { callApi, loading, response, error };
};

/**
 * extract message from object and check for auth error
 * if there is auth error then it will return message as well as clear customer data if customersis logged in
 *
 * if error is already parsed then it will return same error as got in param
 *
 * @param {Object} error => default graphql error
 * @return { code , message } => for auth code will be 401 else it will 400. code are custom added
 */
export const parseGraphQLError = error => {
    if (has(error, 'code')) {
        return error;
    }
    let gqlCategory = get(error, 'graphQLErrors[0].extensions.category', '');
    let errorMessage = get(error, 'graphQLErrors[0].message', '');
    if (gqlCategory === 'graphql-authorization') {
        store.dispatch({
            type: 'LOGOUT'
        });
        return {
            code: 401,
            message: errorMessage
        };
    }
    return {
        code: 400,
        message: errorMessage
    };
};
