const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    let a = 0;
    if (matrix[0][1] == true) { a = a + 1; }
    if (matrix[1][1] == true) { a = a + 1; }
    if (matrix[1][0] == true) { a = a + 1; }
    arr[0][0] = a;

    let b = 0;
    if (matrix[0][0] == true) { b = b + 1; }
    if (matrix[0][1] == true) { b = b + 1; }
    if (matrix[1][1] == true) { b = b + 1; }
    if (matrix[2][0] == true) { b = b + 1; }
    if (matrix[2][1] == true) { b = b + 1; }
    arr[1][0] = b;


    let c = 0;
    if (matrix[1][0] == true) { c = c + 1; }
    if (matrix[1][1] == true) { c = c + 1; }
    if (matrix[2][1] == true) { c = c + 1; }
    arr[2][0] = c;

    let d = 0;
    if (matrix[0][0] == true) { d = d + 1; }
    if (matrix[1][0] == true) { d = d + 1; }
    if (matrix[1][1] == true) { d = d + 1; }
    if (matrix[1][2] == true) { d = d + 1; }
    if (matrix[0][2] == true) { d = d + 1; }
    arr[0][1] = d;

    let e = 0;
    if (matrix[0][0] == true) { e = e + 1; }
    if (matrix[1][0] == true) { e = e + 1; }
    if (matrix[2][0] == true) { e = e + 1; }
    if (matrix[2][1] == true) { e = e + 1; }
    if (matrix[2][2] == true) { e = e + 1; }
    if (matrix[1][2] == true) { e = e + 1; }
    if (matrix[0][2] == true) { e = e + 1; }
    if (matrix[0][1] == true) { e = e + 1; }
    arr[1][1] = e;


    let f = 0;
    if (matrix[1][0] == true) { f = f + 1; }
    if (matrix[2][0] == true) { f = f + 1; }
    if (matrix[1][1] == true) { f = f + 1; }
    if (matrix[1][2] == true) { f = f + 1; }
    if (matrix[2][2] == true) { f = f + 1; }
    arr[2][1] = f;

    let j = 0;
    if (matrix[0][1] == true) { j = j + 1; }
    if (matrix[1][1] == true) { j = j + 1; }
    if (matrix[1][2] == true) { j = j + 1; }
    arr[0][2] = j;

    let h = 0;
    if (matrix[0][2] == true) { h = h + 1; }
    if (matrix[0][1] == true) { h = h + 1; }
    if (matrix[1][1] == true) { h = h + 1; }
    if (matrix[2][1] == true) { h = h + 1; }
    if (matrix[2][2] == true) { h = h + 1; }
    arr[1][2] = h;

    let i = 0;
    if (matrix[1][2] == true) { i = i + 1; }
    if (matrix[1][1] == true) { i = i + 1; }
    if (matrix[2][1] == true) { i = i + 1; }
    arr[2][2] = i;

    return arr;
}

module.exports = {
    minesweeper
};