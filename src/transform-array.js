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
function transform( arr ) {

  if (Array.isArray(arr)===false) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let arr2=arr.slice()
 
  let result = arr2.map((et,index)=>{
    if(et ==='--double-next' && arr2[index+1]) {
      arr2.splice(index, 1, arr2[index+1])
    } else if (et === '--double-next' && !arr2[index+1]) {arr2.splice(index, 1)}
    if(et === '--discard-prev' && arr2[index-1]) {
      arr2.splice((index-1), 2);
    } else if (et === '--discard-prev' && !arr2[index-1]) {arr2.splice(index, 1)}

    if(et === '--discard-next' && (arr2[index+2]==='--discard-prev' || arr2[index+2]==='--double-prev')) {
      arr2.splice((index), 1);
      
    }

    if(et === '--discard-next' && arr2[index+1]) {
      arr2.splice((index), 2);
    } else if (et === '--discard-next' && !arr2[index+1]) {arr2.splice(index, 1)}


    if(et === '--double-prev' && arr2[index-1]) {
      arr2.splice(index, 1, arr2[index-1]);
    } else if (et === '--double-prev' && !arr2[index-1]) {arr2.splice(index, 1)}
  })
  return arr2
}

module.exports = {
  transform
};
