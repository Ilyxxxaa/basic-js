const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    if (!Array.isArray(domains)) return false;
    let objectDomains = {};
    for (let i = 0; i < domains.length; i++) {
        let a = '';
        let arr = domains[i].split('.');
        // массив с словами без точки [yandex, code, ru]
        for (let j = arr.length - 1; j >= 0; j--) {

            console.log(arr);
            console.log(arr[j]);

            a += '.' + arr[j];
            console.log(a); // получается .yandex или .code или .ru

            if (typeof objectDomains[a] === 'number') { objectDomains[a] = (objectDomains[a] + 1); } else { objectDomains[a] = 1; } //  если такое св-во уже есть то просто увеличиваем, если нету , создаем его равным одному
        }
        console.log(objectDomains);
    }
    return objectDomains;
}
getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);
module.exports = {
    getDNSStats
};