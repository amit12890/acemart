import { hasLengthAtLeast } from '@magento/venia-ui/lib/util/formValidators';

const SUCCESS = undefined;

export const isRequired = value => {
    const FAILURE = {
        id: 'form.errors.isRequired',
        defaultMessage: 'Is required.'
    };

    // The field must have a value (no null or undefined) and
    // if it's a boolean, it must be `true`.
    if (!value) return FAILURE;

    // If it is a number or string, it must have at least one character of input (after trim).
    const stringValue = String(value).trim();
    const measureResult = hasLengthAtLeast(stringValue, null, 1);

    if (measureResult) return FAILURE;
    return SUCCESS;
};
