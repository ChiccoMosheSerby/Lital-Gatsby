export const getClasses = (obj) => {
    return Object.keys(obj).reduce((acc, key, i) => {
        const space = i === 0 ? '' : ' ';
        return `${acc}${obj[key] ? `${space}${key}` : ''}`;
    }, '');
};