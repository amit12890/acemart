import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import gql from 'graphql-tag';

const GET_URL_TYPE = gql`
    query resolveUrl($urlKey: String!) {
        urlResolver(url: $urlKey) {
            type
            id
        }
    }
`;

export const useUrlResolver = () => {
    const { pathname } = useLocation();
    const [urlType, setUrlType] = useState(null);
    const [id, setId] = useState(null);

    const { data, error, loading } = useQuery(GET_URL_TYPE, {
        variables: {
            urlKey: pathname
        },
        fetchPolicy: 'network-only',
    });

    useEffect(() => {
        const urlTypeFromData = data && data.urlResolver ?
            data.urlResolver.type :
            null;

        const idFromData = data && data.urlResolver ?
            data.urlResolver.id :
            null;

        setUrlType(urlTypeFromData);
        setId(idFromData);

        return () => {
            setUrlType(null);
            setId(null);
        };
    }, [data])

    return {
        loading,
        error,
        urlType,
        urlId: id
    }
}
