import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { Search as SearchIcon, X as ClearIcon } from 'react-feather';
import Icon from '@magento/venia-ui/lib/components/Icon';
import TextInput from '../TextInput';
import Trigger from '@magento/venia-ui/lib/components/Trigger';
import { useLocation } from 'react-router-dom';

import defaultClasses from './searchField.css';
import { useStyle } from '../../classify';
import { useSearchField } from '../../../magento/peregrine/talons/SearchBar/useSearchField';
import { searchPage } from '../../../url.utils';



const clearIcon = <Icon src={ClearIcon} size={24} />;
const searchIcon = <Icon src={SearchIcon} size={24} />;

const SearchField = props => {
    const classes = useStyle(defaultClasses);
    const { isSearchOpen, onChange, onFocus } = props;
    const { inputRef, resetForm, value } = useSearchField({ isSearchOpen });

    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        if (pathname !== searchPage()) {
            resetForm();
        }
    }, [pathname]);

    const resetButton = value ? (
        <Trigger action={resetForm}>{clearIcon}</Trigger>
    ) : null;

    return (
        <TextInput
            after={value ? resetButton : searchIcon}
            field="search_query"
            onFocus={onFocus}
            onValueChange={onChange}
            forwardedRef={inputRef}
            classes={{
                input: classes.searchTextInput
            }}
            placeholder="Search Ace Mart"
        />
    );
};

export default SearchField;

SearchField.propTypes = {
    onChange: func,
    onFocus: func
};
