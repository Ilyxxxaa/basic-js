const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
    let separator = options.hasOwnProperty('separator') ? options.separator : '+';
    let addition = options.hasOwnProperty('addition') ? options.addition : '';
    let addRep = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
    let addSep = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
    let addWord = addition;
    for (let i = 1; i < addRep; i++) {
        addWord = addWord + addSep + addition;
    }
    let word = str + addWord;
    for (let i = 1; i < repeatTimes; i++) {
        word = word + separator + str + addWord;
    }
    return word;
}

module.exports = {
    repeater
};