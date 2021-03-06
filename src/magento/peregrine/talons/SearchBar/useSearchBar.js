import { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { searchPage } from '../../../../url.utils';

const initialValues = { search_query: '' };

export const useSearchBar = () => {
    const [valid, setValid] = useState(false);
    const {
        elementRef,
        expanded: isAutoCompleteOpen,
        setExpanded: setIsAutoCompleteOpen
    } = useDropdown();
    const history = useHistory();
    const { push } = history;

    useEffect(() => {
        // do not open on load
        if(history.location.pathname === searchPage()) {
            setIsAutoCompleteOpen(false);
        }
    }, [history])

    // expand or collapse on input change
    const handleChange = useCallback(
        value => {
            const hasValue = !!value;
            const isValid = hasValue && value.length > 1;
            setValid(isValid);
            setIsAutoCompleteOpen(hasValue);
        },
        [setIsAutoCompleteOpen, setValid]
    );

    // navigate on submit
    const handleSubmit = useCallback(
        ({ search_query }) => {
            if (search_query != null && search_query.trim().length > 0) {
                push(`${searchPage()}?q=${search_query}`);
                setIsAutoCompleteOpen(false);
            }
        },
        [push, setIsAutoCompleteOpen]
    );

    return {
        containerRef: elementRef,
        handleChange,
        handleSubmit,
        initialValues,
        isAutoCompleteOpen,
        setIsAutoCompleteOpen,
        setValid,
        valid
    };
};
