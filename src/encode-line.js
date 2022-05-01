const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let arrStr = str.split('');
    let newStr = ``;
    let a = 1;

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] == arrStr[i + 1]) {
            a += 1;
        } else {
            if (a == 1) { a = ''; }
            newStr += `${a}` + arrStr[i];
            a = 1;
        }
    }
    return newStr;
}

module.exports = {
    encodeLine
};