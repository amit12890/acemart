export const toMoment = (str) => {
    if (!str) return;

    const conversions = {
        'd': 'DD',
        'D': 'ddd',
        'j': 'D',
        'l': 'dddd',
        'N': 'E',
        'S': 'o',
        'w': 'e',
        'z': 'DDD',
        'W': 'W',
        'F': 'MMMM',
        'm': 'MM',
        'M': 'MMM',
        'n': 'M',
        't': '',
        'L': '',
        'o': 'YYYY',
        'Y': 'YYYY',
        'y': 'YY',
        'a': 'a',
        'A': 'A',
        'B': '',
        'g': 'h',
        'G': 'H',
        'h': 'hh',
        'H': 'HH',
        'i': 'mm',
        's': 'ss',
        'u': 'SSS',
        'e': 'zz',
        'I': '',
        'O': '',
        'P': '',
        'T': '',
        'Z': '',
        'c': '',
        'r': '',
        'U': 'X',
    };

    return str.replace(/[A-Za-z]+/g, function(match) {
        return conversions[match] || match;
    });
}
