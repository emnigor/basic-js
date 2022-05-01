const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dat) {
  if (!dat){
    return 'Unable to determine the time of year!'
  }
  let arrDat = Object.keys(dat)
  if (arrDat.length>0) {
    throw new Error('Invalid date!')
  }
  if (!(dat instanceof Date) || isNaN(dat)) {
    throw new Error('Invalid date!')
  }
  
  let num = dat.getMonth()
    if(num<=1 || num===11) {
    return 'winter'
  }
  if(num>1 && num<=4) {
    return 'spring'
  }
  if(num>4 && num<=7) {
    return 'summer'
  }
  if(num>7 && num<=10) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
