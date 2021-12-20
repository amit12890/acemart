import { drop, includes, unescape } from "lodash-es"

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
    '&trade;': '™'
};

export const replaceSpecialChars = name => {
    let newStr = unescape(name)
    newStr = newStr.replace(/&reg;|&amp;|&copy;|&trade;/gi, (matched) => {
        return keyMap[matched];
    });
    return newStr;
};