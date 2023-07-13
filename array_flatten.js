"use strict";

const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);

// function flattenAndSort(array) {
//   let result = []
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array[i].length; j++){
//       result.push(array[i][j])
//     }
//   }
//   for (let i = 0; i < result.length - 1; i++) {
//     for(let j = i + 1; j < result.length; j++) {
//       if(result[i] > result[j]){
//         [result[i], result[j]] = [result[j], result[i]]
//       }
//     }
//   }
//   return result
// }
