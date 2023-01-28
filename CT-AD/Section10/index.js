// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n === 0) return;
  for (let i = 1; i < n + 1; i++) {
    console.log(
      Array(i).fill("#").join("") +
        Array(n - i)
          .fill(" ")
          .join("")
    );
  }
}

function steps1(n) {
  if (n === 0) return;
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }
    console.log(stairs);
  }
}
