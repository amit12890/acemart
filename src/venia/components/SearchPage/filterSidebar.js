import React, { useMemo } from 'react';
import { useStyle } from '../../classify';
import { camelCase, startCase, get, find } from 'lodash';

import productLabel from '../../../assets/labelSprite.png';
import Checkbox from '../Checkbox';
import { Form } from 'informed';
import CompareListBlock from '../../../components/CompareListPage/compareListBlock';

import defaultClasses from '../FilterSidebar/filterSidebar.css';
import filterBlockClasses from '../FilterModal/filterBlock.css';
import filterListClasses from '../FilterModal/FilterList/filterList.css';
import filterDefaultClasses from '../FilterModal/FilterList/filterDefault.css';
import filterSidebar from "./filterSidebar.css";

const style = {
    '--productLabel': `url("${productLabel}")`
};

const FilterSidebar = props => {
    const { filters, setFilter, categoryFiltered } = props;
    const classes = useStyle(
        defaultClasses,
        filterBlockClasses,
        filterListClasses,
        filterDefaultClasses,
        filterSidebar,
        props.classes
    );

    const filtersList = useMemo(() => {
        return filters.map(filter => {
            const { field, label, type, facet_active, values } = filter;
            if (field !== 'stickers') {
                return (
                    <FilterBlock
                        {...filter}
                        setFilter={setFilter}
                        categoryFiltered={categoryFiltered}
                    />
                );
            }
            return null;
        });
    }, [filters, setFilter, categoryFiltered]);

    const toggleFiltersList = useMemo(() => {
        const stickersField = find(filters, ['field', 'stickers']);
        if (!!stickersField) {
            const { field, label, facet_active, values } = stickersField;
            return (
                <>
                    <span className={classes.header}>
                        <span className={classes.name}>Features</span>
                    </span>
                    <div className={classes.labelWrapper}>
                        {values && values.length
                            ? values.map(item => {
                                const { active, value, label, count } = item;
                                return (
                                    <div
                                        key={item.value}
                                        className={classes.labelItem}
                                        onClick={setFilter(
                                            field,
                                            item,
                                            facet_active
                                        )}
                                    >
                                        <i
                                            className={
                                                classes[camelCase(value)]
                                            }
                                            style={style}
                                        />
                                        <span className={classes.filterLabel}>
                                            {startCase(label)}
                                        </span>
                                        <span>{count}</span>
                                    </div>
                                );
                            })
                            : null}
                    </div>
                </>
            );
        }
        return null;
    }, [filters, setFilter]);

    return (
        <aside className={classes.root}>
            <div className={classes.body}>
                {toggleFiltersList}
                <ul className={classes.blocks}>{filtersList}</ul>
            </div>
            <div className={classes.body}>
                <CompareListBlock />
            </div>
        </aside>
    );
};

const FilterBlock = props => {
    const {
        field,
        label,
        type,
        facet_active,
        values,
        setFilter,
        categoryFiltered
    } = props;
    const classes = useStyle(
        filterBlockClasses,
        filterListClasses,
        filterSidebar,
        props.classes
    );
    const filterDefaultClass = useStyle(filterDefaultClasses);

    return (
        <li className={classes.root} aria-label={label}>
            <span className={classes.header}>
                <span className={classes.name}>{label}</span>
            </span>
            {field === 'ss_hierarchy' && (
                <Form className={classes.categoryList}>
                    <ul className={classes.categoryItems}>
                        {categoryFiltered.labels.map((label, ind) => {
                            const checkField = categoryFiltered.values[ind];
                            const value = categoryFiltered.values[ind - 1];
                            return (
                                <li key={label} className={classes.categoryItem}>
                                    <Checkbox
                                        classes={filterDefaultClass}
                                        field={checkField}
                                        fieldValue={true}
                                        label={label}
                                        onClick={setFilter(
                                            field,
                                            { value, active: ind === 0 },
                                            true
                                        )}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </Form>
            )}
            {values && values.length ? (
                <Form className={classes.list}>
                    <ul className={classes.items}>
                        {values.map(item => {
                            const { active, value, label, count } = item;
                            return (
                                <li key={item.value} className={classes.item}>
                                    <Checkbox
                                        classes={filterDefaultClass}
                                        field={value}
                                        fieldValue={!!active}
                                        label={label}
                                        onClick={setFilter(
                                            field,
                                            item,
                                            facet_active
                                        )}
                                    />
                                    <strong>{count}</strong>
                                </li>
                            );
                        })}
                    </ul>
                </Form>
            ) : null}
        </li>
    );
};

export default FilterSidebar;
