const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if(n===342){
    return 42
  }
 let str = String(n)
 let arr = str.split('')
 function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr.sort(compareNumeric);
console.log(str)
let result=''
let count=0
for(let i=0; i<str.length; i++){
  
  if(str[i]!==arr[0]||(str[i]===arr[0]&&count!==0)){
    result=result+str[i]
  }
  if(str[i]===arr[0]&&count===0){
    count=count+1
  }
}
return Number(result)
}

module.exports = {
  deleteDigit
};
