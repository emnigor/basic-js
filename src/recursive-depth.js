const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


//  class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();

class DepthCalculator {
  constructor(arr){
    this.arr=arr
  }
  calculateDepth( arr ) {
   let result=1
    arr.forEach(element => {
      if(Array.isArray(element)) {
        result++
        calculateDepth(element )
      }
    });
    return result
  }
  
}

module.exports = {
  DepthCalculator
};
