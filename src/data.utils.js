import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';

import { useUserContext } from '@magento/peregrine/lib/context/user';


export const useApiData = ({ url = "", method = "get", headers = {}, data = {}, isLazy = false, onSuccess = null }) => {
    const [{ token }, _] = useUserContext();
    const [loading, setLoading] = useState(!isLazy);
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);

    const callApi = useCallback(
        async (cbUrl = null, data = {}) => {
            setLoading(true);
            try {
                const response = await Axios({
                    method, url: cbUrl ? cbUrl : url,
                    headers: {
                        authorization: token ? `Bearer ${token}` : '',
                        ...headers,
                    },
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