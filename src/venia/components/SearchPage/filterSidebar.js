import React, { useMemo } from 'react';
import { useStyle } from '../../classify';
import { camelCase, startCase, get } from 'lodash';

import productLabel from '../../../assets/labelSprite.png';
import Checkbox from '../Checkbox';
import { Form } from 'informed';

import defaultClasses from '../FilterSidebar/filterSidebar.css';
import filterBlockClasses from "../FilterModal/filterBlock.css";
import filterListClasses from "../FilterModal/FilterList/filterList.css";
import filterDefaultClasses from '../FilterModal/FilterList/filterDefault.css';

const style = {
    '--productLabel': `url("${productLabel}")`
};

const FilterSidebar = props => {
    const { filters, setFilter, categoryFiltered } = props;
    const classes = useStyle(
        defaultClasses, filterBlockClasses, filterListClasses, 
        filterDefaultClasses, props.classes
    );

    const filtersList = useMemo(() => {
        return (
            <div>
                {filters.map(filter => {
                    const { field, label, type, facet_active, values } = filter;
                    if (field === 'stickers') {
                        return (
                            <div key={field}>
                                <span className={classes.header}>
                                    <span className={classes.name}>{label}</span>
                                </span>
                                <div>
                                    {values && values.length
                                        ? values.map(item => {
                                              const { active, value, label, count } = item;
                                              return (
                                                  <div
                                                      key={item.value}
                                                      className={classes.labelItem}
                                                      onClick={setFilter(field, item, facet_active)}
                                                  >
                                                      <i className={classes[camelCase(value)]}
                                                          style={style}
                                                      />
                                                      <span
                                                          className={classes.filterLabel}
                                                      >
                                                          {startCase(label)}
                                                      </span>
                                                      <span>{count}</span>
                                                  </div>
                                              );
                                          })
                                        : null}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={field}>
                                <span className={classes.header}>
                                    <span className={classes.name}>{label}</span>
                                </span>
                                {field === "ss_hierarchy" &&
                                    <Form className={classes.list_expanded}>
                                        <ul className={classes.items}>
                                            {categoryFiltered.labels.map((label, ind) => {
                                                const checkField = categoryFiltered.values[ind]
                                                const value = categoryFiltered.values[ind-1]
                                                return (
                                                    <li key={label}
                                                        className={classes.item}
                                                    >
                                                        <Checkbox
                                                            classes={classes}
                                                            field={checkField}
                                                            fieldValue={true}
                                                            label={label}
                                                            onClick={
                                                                setFilter(field, { value, active: ind === 0 }, true)
                                                            }
                                                        />
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </Form>
                                }
                                <Form className={classes.list_expanded}>
                                    <ul className={classes.items}>
                                    {values && values.length
                                        ? values.map(item => {
                                              const { active, value, label, count } = item;
                                              return (
                                                <li key={item.value}
                                                    className={classes.item}
                                                >
                                                    <Checkbox
                                                        classes={classes}
                                                        field={value}
                                                        fieldValue={!!active}
                                                        label={label}
                                                        onClick={setFilter(field, item, facet_active)}
                                                    />
                                                    <strong>{count}</strong>
                                                </li>
                                              )
                                          })
                                        : null}
                                    </ul>
                                </Form>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }, [filters, setFilter]);

    return (
        <aside className={classes.root}>
            <div className={classes.body}>
                <ul className={classes.blocks}>{filtersList}</ul>
            </div>
        </aside>
    );
};

export default FilterSidebar;
