// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne

if (STR_ONE === 'Hello') {
  answerOne = true
}
console.log(answerOne)

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars

let answerTwo

if (STR_TWO !== 'Hello') {
  answerTwo = true
}
console.log(answerTwo)

// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree

if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}
console.log(answerThree)

// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars

let answerFour

if (
  STR_FIVE.at(0).toLowerCase() ===
  STR_FIVE.at(STR_FIVE.length - 1).toLowerCase()
) {
  answerFour = true
}
console.log(answerFour)

// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive

if (
  STR_SIX.at(0).toLowerCase() === STR_SIX.at(STR_SIX.length - 1).toLowerCase()
) {
  answerFive = true
} else {
  answerFive = false
}
console.log(answerFive)

// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars

let answerSix

const lengthOfSeven = STR_SEVEN.length
const middleChar = Math.floor(lengthOfSeven / 2 + 1) - 1 // + 1 first to always find the middle. -1 then to counteract the start at 0. Mathfloor rundet immer ab

if (lengthOfSeven % 2 !== 0) {
  answerSix = STR_SEVEN[middleChar]
}
console.log(answerSix)

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

// Index von 0 und (length-1) muss jeweils den gleichen Abstand von der "Mitte" haben

const lengthOfEight = STR_EIGHT.length
const middleOfEigth = lengthOfEight / 2 - 1 // -1 für Indexkorrektur
const leftIndex = 0 + middleOfEigth // 0 als Startindex ist bereits bereinigt
const rightIndex = lengthOfEight - 1 - middleOfEigth // -1 für Indexkorrektur

if (lengthOfEight % 2 === 0) {
  answerSeven = STR_EIGHT[leftIndex] + STR_EIGHT[rightIndex]
}
console.log(answerSeven)

// 8. Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight

const allSeasons = {
  springSeason: ['March', 'April', 'May'],
  summerSeason: ['June', 'July', 'August'],
  autumnSeason: ['September', 'October', 'November'],
  winterSeason: ['December', 'January', 'February']
}

// indexOf returns -1 if "MONTH" is not found in the property. If it is not -1 it has found the month!

if (allSeasons.springSeason.indexOf(MONTH) !== -1) {
  answerEight = 'Spring'
} else if (allSeasons.summerSeason.indexOf(MONTH) !== -1) {
  answerEight = 'Summer'
} else if (allSeasons.autumnSeason.indexOf(MONTH) !== -1) {
  answerEight = 'Autumn'
} else if (allSeasons.winterSeason.indexOf(MONTH) !== -1) {
  answerEight = 'Winter'
} else {
  answerEight = 'Input was not a month!'
}

console.log(answerEight)

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
