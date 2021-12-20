import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';

import { useUserContext } from '@magento/peregrine/lib/context/user';
import { size } from 'lodash-es';


export const useApiData = ({ url = "", method = "get", headers = {}, data = {}, isLazy = false, onSuccess = null }) => {
    const [{ token }, _] = useUserContext();
    const [loading, setLoading] = useState(!isLazy);
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);

    const callApi = useCallback(
        async (cbUrl = null, data = {}) => {
            setLoading(true);
            try {
                let requestHeaders = { ...headers }
                // auth header will be only passed if token has values
                if (size(token) > 0) {
                    requestHeaders = {
                        ...requestHeaders,
                        authorization: token ? `Bearer ${token}` : ''
                    }
                }
                const response = await Axios({
                    method, url: cbUrl ? cbUrl : url,
                    headers: requestHeaders,
                    data,
                });
                setResponse(response.data);
                setLoading(false);
                if (!!onSuccess) onSuccess(response.data);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log("file: data.utils.js ~ line 27 ~ error", error)
            }
        }, [url, onSuccess]
    )

    useEffect(() => {
        // if isLazy call api manually
        // else api will be called as soon as component renders
        if (!isLazy)
            callApi(data);
    }, [])

    return { callApi, loading, response, error };
}