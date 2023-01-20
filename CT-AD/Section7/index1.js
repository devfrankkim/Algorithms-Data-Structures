// loop the array
// **** Observe the last box => arr[arr.length - 1] ****
// (!last || if lastBox.length === size) => get new array
// else => push to last box

function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const lastBox = chunked[chunked.length - 1];

    if (!lastBox || lastBox.length === size) {
      chunked.push([element]);
    } else {
      lastBox.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
