/*
Given a string, return a new string with the reversed 
order of characters
--- Examples
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
*/

// loop
// create an empty string called 'reversed'
// for each character in the provided string
// - take the character and add it to the start
//   of 'reversed'
// return the variable 'reversed'

function reverse(str) {
  // [s, h, i, t]
  return str.split("").reduce((accu, curr) => curr + accu, "");
  // [t  +  i +  h + s + ""]
}

module.exports = reverse;

// #1 Solution
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// #2 Solution
// function reverse(str) {
//   let reversed = "";

//   // avoid for loops.
//   for (let character of str) {
//     reversed = character + reversed;
//     // 'shit'
//     // (t,i,h,s)
//   }
//   return reversed;
// }

/*
  reduce is used to take all the different values with 
  an array and condense them 
  all down to one singular value which is essentially 
  exactly what we are trying to do here. 
  */

// const fruit = [
//   "apple",
//   "grape",
//   "banana",
//   "apple",
//   "orange",
//   "grape",
//   "apple",
//   "orange"
// ];

// const result = fruit.reduce((object, currentValue) => {
//   if (!object[currentValue]) {
//     object[currentValue] = 0;
//   }
//   object[currentValue]++;

//   return object;
// }, { });
// apple: 3, banana:1 , grape:2, orange: 2
