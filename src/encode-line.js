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
  let count=1;
  let string=''
  for(i=0; i<str.length; i++){
    if (str[i]===str[i+1]){
      count++
    }
    if (str[i]!==str[i+1] && count>1){
      
      string=string+count+str[i]
      count=1
    }
    if (str[i]!==str[i+1] && str[i]!==str[i-1] && count===1){
      string=string+str[i]
    }
  }
  return string
}

module.exports = {
  encodeLine
};
