import React, { Fragment, useCallback } from 'react';
import { asField } from 'informed';
import { compose } from 'redux';
import defaultClasses from '@magento/venia-ui/lib/components/TextInput/textInput.css';
import classify from '@magento/venia-ui/lib/classify';
import { FieldIcons, Message } from '@magento/venia-ui/lib/components/Field';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { X as XIcon } from 'react-feather';

const UploadInput = props => {
  const {
    onChange,
    classes,
    onBlur,
    field,
    message,
    id,
    after,
    before,
    forwardedRef,
    fieldState,
    fieldApi,
    ...rest
  } = props;

  const { setTouched, setValue } = fieldApi;

  const inputClass = fieldState.error ? classes.input_error : classes.input;

  const changeHandler = useCallback(
    e => {
      const inputValue = e.target.value;

      setValue(inputValue);

      if (onChange) {
        onChange(e);
      }
    },
    [onChange, setValue]
  );

  return (
    <Fragment>
      <FieldIcons after={after} before={before}>
        <input
          {...rest}
          id={id}
          type="file"
          name={field}
          className={inputClass}
          onChange={changeHandler}
          ref={forwardedRef}
          onBlur={e => {
            setTouched(true);
            if (onBlur) {
              onBlur(e);
            }
          }}
        />
      </FieldIcons>
      <div className={classes.fileCancel} 
        onClick={() => {
          setValue(null)
          if(forwardedRef && forwardedRef.current) {
            forwardedRef.current.value = "";
          }
        }}>
          <Icon
              src={XIcon}
              size={14}
          />
      </div>
    </Fragment>
  );
};

export default compose(
  classify(defaultClasses),
  asField
)(UploadInput);
