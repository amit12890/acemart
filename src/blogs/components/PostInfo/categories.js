import React from 'react';
import { Link } from 'react-router-dom';

const Categories = props => {
    const { categories, postCategory } = props;

    if (categories.length > 0) {
        return (
            <div className={postCategory}>
                {
                    categories.map(({category_id, title, category_url}) =>
                        <Link key={category_id} className="category-name" to={new URL(category_url).pathname} title={title}>{title}</Link>
                    )
                }
            </div>
        )
    }

    return null;
}

export default Categories;
