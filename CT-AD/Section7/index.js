// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let arr = [];

  for (let i = 0; i < array.length; i = size + i) {
    arr.push(array.slice(i, size + i));
  }

  return arr;
}

// ex) 2개 size -> cut array to 2

/* 
  0. confirm Array length

  1. loop the Array -> how?
  2. split the Array (i, size + i)
  3. push to new array 
  4. return answer (new array)
  
  */

module.exports = chunk;
