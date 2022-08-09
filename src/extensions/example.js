// Completed function examples

// 1. Define a function that returns the string "Byeee, friend :)"
// Input | Output
// - | "Byeee, friend :)"

function sayByeee() {
  return 'Byeee, friend :)'
}

// 2. Define a function that doubles (multiplies by 2) a number
// Input   | Output
// 1       | 2
// 4       | 8

function doubleNumber(num) {
  return num * 2
}

// 1., 2. change the exported value to be the name of the function you defined
module.exports = {
  a: sayByeee,
  b: doubleNumber
}
