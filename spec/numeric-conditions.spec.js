const {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
} = require('../src/numeric-conditions')

describe('answerOne', () => {
  it('should be true', () => {
    expect(answerOne).toEqual(true)
  })
})

describe('answerTwo', () => {
  it('should be false', () => {
    expect(answerTwo).toEqual(false)
  })
})

describe('answerThree', () => {
  it('should be true', () => {
    expect(answerThree).toEqual(true)
  })
})

describe('answerFour', () => {
  it('should be true', () => {
    expect(answerFour).toEqual(true)
  })
})
