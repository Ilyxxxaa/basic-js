const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (Array.isArray(arr)) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            if (typeof arr[i] === 'number') {
                a.push(arr[i]);
            } else if (arr[i] == '--discard-next') {
                i++;
            } else if (arr[i] == '--discard-prev' && arr[i - 2] !== '--discard-next') {
                a.pop();
                console.log(a);
            } else if (arr[i] == '--double-next' && i !== arr.length - 1) {
                a.push(arr[i + 1]);
                console.log(a);
            } else if (arr[i] == '--double-prev' && arr[i - 2] !== '--discard-next' && i !== 0) {
                a.push(arr[i - 1]);
                console.log(a);
            } else if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
                a.push(arr[i]);
            }
            console.log(a);
        }
        console.log(a);
        return a;
    } else throw new Error(`'arr' parameter must be an instance of the Array!`);

}




module.exports = {
    transform
};