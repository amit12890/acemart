import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './sidebar.css';

import { usePermalinkSettings } from '../../hooks/usePermalinkSettings';

const SearchBar = () => {
    const [state, setState] = useState('');
    const { blogSearchRoute } = usePermalinkSettings();
    const history = useHistory();

    const handleClick = () => {
        if (blogSearchRoute && state && state.match(/^[a-zA-Z0-9 ]+$/)) history.push(blogSearchRoute(encodeURI(state)))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleClick()
    }

    return (
        <div className={classes.blogSearch}>
            <div className={classes.blockTitle}>
                <strong>Search</strong>
            </div>
            <div className={classes.blockContent}>
                <div className={`${classes.field} ${classes.search}`}>
                    <label htmlFor="blog_search">
                        <span>Search</span>
                    </label>
                    <div className={classes.control}>
                        <input
                            id="blog_search"
                            type="text"
                            className={classes.inputText}
                            name="q"
                            value={state}
                            maxLength={128}
                            placeholder="Search posts here..."
                            aria-haspopup="false"
                            aria-autocomplete="both"
                            autoComplete="false"
                            onChange={(e) => setState(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className={classes.actionSearch}
                    title="Search"
                    onClick={handleClick}
                >
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
