import { drop, includes, unescape, get, isObject, sum, mapKeys, size, find } from "lodash"
import JsBarcode from 'jsbarcode'



// TODO: remove temp image fix
export const getOriginalImage = (url) => {
    if (includes(url, "/cache/")) {
        const smallImageUrlArr = url.split("cache/")
        const subUrl = drop(smallImageUrlArr[1].split("/")).join("/")
        return smallImageUrlArr[0] + subUrl
    } else {
        return url
    }
}

// this functions are used to replace some special characters from html entity to symbol
const keyMap = {
    '&reg;': '®',
    '&amp;': '&',
    '&copy;': '©',
    '&trade;': '™',
    "&quot;": `"`,
};

export const replaceSpecialChars = name => {
    let newStr = unescape(name)
    newStr = newStr.replace(/&reg;|&amp;|&copy;|&trade;|&quot;/gi, (matched) => {
        return keyMap[matched];
    });
    return newStr;
};

/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */

const SUCCESS = undefined;

export const hasLengthAtLeast = (value, minimumLength) => {
    if (!value || value.length < minimumLength) {
        return `Must contain at least ${minimumLength} character(s).`;
    }

    return SUCCESS;
};

export const hasLengthAtMost = (value, maximumLength) => {
    if (value && value.length > maximumLength) {
        return `Must not exceed ${maximumLength} character(s).`;
    }

    return SUCCESS;
};

export const hasLengthExactly = (value, length) => {
    if (value && value.length !== length) {
        return `Must contain exactly ${length} character(s).`;
    }

    return SUCCESS;
};

export const isRequired = value => {
    if (isObject(value)) {
        return get(value, "region_id", false) ? SUCCESS : 'The field is required.'
    }
    return (value || '').trim() ? SUCCESS : 'The field is required.';
};

export const validateEmail = value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(value)
        ? SUCCESS
        : 'Please enter a valid email address (Ex: johndoe@domain.com).';
};

export const validateRegionCode = (value, values, countries) => {
    const country = countries.find(({ id }) => id === 'US');

    if (!country) {
        return 'Country "US" is not an available country.';
    }
    const { available_regions: regions } = country;

    if (!(Array.isArray(regions) && regions.length)) {
        return 'Country "US" does not contain any available regions.';
    }

    const region = regions.find(({ code }) => code === value);
    if (!region) {
        return `State "${value}" is not an valid state abbreviation.`;
    }

    return SUCCESS;
};

export const validatePassword = value => {
    const count = {
        lower: 0,
        // upper: 0,
        digit: 0,
        special: 0
    };

    for (const char of value) {
        if (/[a-z]/.test(char)) count.lower++;
        // else if (/[A-Z]/.test(char)) count.upper++;
        else if (/\d/.test(char)) count.digit++;
        else if (/\S/.test(char)) count.special++;
    }
    if (sum(Object.values(count).filter(Boolean)) < 8) {
        return 'A password must contain at least 8 of the following: lowercase, digits, special characters.';
    }

    return SUCCESS;
};

export const validateConfirmPassword = (
    value,
    values,
    passwordKey = 'password'
) => {
    return value === values[passwordKey] ? SUCCESS : 'Passwords must match.';
};

/**
 * FOR CHECKOUT ADDRESS FORM ONLY
 * 
 * In checkout address country has diff structure data
 * so id value is passed as code
 * 
 * @param { String } code
 * @param {Array} coutries 
 */
export const findCountryByCode = (code = '', coutries) => {
    if (size(code) === 0) {
        return {}
    }

    return find(coutries, (country) => country.id == code)
}

/**
 * get matched country raw object
 * @param {Integer / String } id 
 * @param {Array} coutries 
 */
export const findCountryById = (id = '', coutries) => {
    if (size(String(id)) === 0) {
        return {}
    }

    return find(coutries, (country) => country.id == id)
}




/**
 * FOR CHECKOUT ADDRESS ONLY
 * 
 * region block has diff key names
 * 
 * @param {Object /String } region 
 */
export const transpileCheckoutAddressRegion = (region) => {
    // first check param values
    if (size(region) === 0) {
        return {}
    }
    // condition 2:
    if (isObject(region)) {
        let name = get(region, "label", false)
        let code = get(region, "code", false)
        let id = get(region, "region_id", false)
        // fill all data
        if (!code || size(code) === 0) {
            code = name
        } else if (!name || size(name) === 0) {
            region = code
        }
        if (!id) {
            id = 0
        }
        return { id, code, name }
    }
    // condition 1:
    return { id: 0, code: region, name: region }
}

export const emptyCheck = (stateObject) => {
    let errors = {};
    mapKeys(stateObject, (value, key) => {
        if (size(value) === 0) {
            errors[key] = "This field is Required";
        }
    });
    return errors;
}

export const isPasswordSame = (value, values, fieldKey) => {
    const message = {
        id: 'validation.isEqualToFieldNew',
        defaultMessage: 'Please enter the same value again.',
        value: fieldKey
    };
    return value === values[fieldKey] ? undefined : message;
};

export const isValidEmail = (value) => {
    const isValid = String(value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    if (isValid) {
        return SUCCESS
    } else {
        return {
            id: 'validation.validateEmail',
            defaultMessage: 'Please enter a valid email address (Ex: johndoe@domain.com).'
        };
    }
};

/**
 * convert js to barcode image
 * @param {string} text 
 */
export const textToBase64Barcode = (text) => {
    let canvas = document.createElement("canvas");
    JsBarcode(canvas, text, { format: "CODE128" });
    return canvas.toDataURL("image/png");
}

export const getReviewText = (count) => {
    if (count === 1) {
        return `${count} review`
    } else {
        return `${count} reviews`
    }
}

// breakpoints
export const MOBILE_SCREEN = 1024