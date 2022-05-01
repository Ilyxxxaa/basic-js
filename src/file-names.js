const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    if (!Array.isArray(names)) return false;
    let newNames = [];
    newNames.push(names[0]);
    for (i = 1; i < names.length; i++) {
        let j = i;
        count = i;
        while (j > 0) {

            if (names[i] !== names[j - 1]) {
                count--;
            } else {
                newNames.push(`${names[i]}` + `(1)`);
            }

            j -= 1;
            if (count == 0) {
                newNames.push(names[i]);
            }
        }

    }
    return newNames;
}

module.exports = {
    renameFiles
};