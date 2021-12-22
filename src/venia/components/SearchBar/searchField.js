import React, { useCallback } from 'react';
import { func } from 'prop-types';
import { Search as SearchIcon, X as ClearIcon } from 'react-feather';
import { useSearchField } from '@magento/peregrine/lib/talons/SearchBar';

import Icon from '@magento/venia-ui/lib/components/Icon';
import TextInput from '../TextInput';
import Trigger from '@magento/venia-ui/lib/components/Trigger';

import defaultClasses from './searchField.css';
import { useStyle } from '../../classify';

const clearIcon = <Icon src={ClearIcon} size={24} />;
const searchIcon = <Icon src={SearchIcon} size={24} />;

const SearchField = props => {
    const classes = useStyle(defaultClasses);
    const { isSearchOpen, onChange, onFocus, setVisible } = props;
    const { inputRef, resetForm, value } = useSearchField({ isSearchOpen });

    const handleAction = useCallback(() => {
        resetForm();
        setVisible(false)
    }, []);

    const resetButton = value ? (
        <Trigger action={handleAction}>{clearIcon}</Trigger>
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
        />
    );
};

export default SearchField;

SearchField.propTypes = {
    onChange: func,
    onFocus: func
};
