import React from 'react';
import { number } from 'prop-types';
import { useWidget } from '../../talons/useWidget';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './widget.css';
import ProductReviews from './productReviews';

const LAYOUTS = {
  GRID: 'grid',
  VERTICAL: 'vertical'
};

const Widget = props => {
  const { layout } = props;
  const { loading, isShow, amReviewWidget } = useWidget(props);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!isShow) {
    return null;
  }

  const classes = mergeClasses(defaultClasses, props.classes);
  const { title } = amReviewWidget;

  return (
    <div className={classes.root}>
      {title && <div className={classes.title}>{title}</div>}
      <ProductReviews {...amReviewWidget} layout={layout} />
    </div>
  );
};

Widget.propTypes = {
  widgetId: number.isRequired
};

Widget.defaultProps = {
  widgetId: 1,
  layout: LAYOUTS.GRID
};

export default Widget;
