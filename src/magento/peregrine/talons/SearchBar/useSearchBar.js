import { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDropdown } from '@magento/peregrine/lib/hooks/useDropdown';
import { SEARCH_PAGE_PATH } from '../../../../url.utils';

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
        if(history.location.pathname === SEARCH_PAGE_PATH) {
            setIsAutoCompleteOpen(false);
        }
    }, [history])

    // expand or collapse on input change
    const handleChange = useCallback(
        value => {
            const hasValue = !!value;
            const isValid = hasValue && value.length > 2;
            setValid(isValid);
            setIsAutoCompleteOpen(hasValue);
        },
        [setIsAutoCompleteOpen, setValid]
    );

    // expand on focus
    const handleFocus = useCallback(() => {
        setIsAutoCompleteOpen(true);
    }, [setIsAutoCompleteOpen]);

    // navigate on submit
    const handleSubmit = useCallback(
        ({ search_query }) => {
            if (search_query != null && search_query.trim().length > 0) {
                push(`${SEARCH_PAGE_PATH}?query=${search_query}`);
                setIsAutoCompleteOpen(false);
            }
        },
        [push, setIsAutoCompleteOpen]
    );

    return {
        containerRef: elementRef,
        handleChange,
        handleFocus,
        handleSubmit,
        initialValues,
        isAutoCompleteOpen,
        setIsAutoCompleteOpen,
        setValid,
        valid
    };
};
