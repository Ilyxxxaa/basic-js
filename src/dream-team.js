const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members) == true) {
        let teamName = '';
        members.forEach((item) => {
            if (typeof(item) == 'string' && item) {
                item.trim();
                teamName += item[0];
                console.log(teamName);
            }
        });
        teamName = teamName.toUpperCase();
        console.log(teamName);
        teamName = teamName.split('');
        console.log(teamName);
        teamName = teamName.sort();
        console.log(teamName);
        teamName = teamName.join('');
        console.log(teamName);
        return teamName;
    } else return false;
}


module.exports = {
    createDreamTeam
};