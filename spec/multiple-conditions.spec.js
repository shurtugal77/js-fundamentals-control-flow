const {
  answerOne,
  STR,
  answerTwo,
  AGE,
  answerThree
} = require('../src/multiple-conditions')

describe('answerOne', () => {
  it('should be true', () => {
    expect(answerOne).toEqual(true)
  })
})

describe('answerTwo', () => {
  it("should be true if STR is 'Hello'", () => {
    if (STR === 'Hello') {
      expect(answerTwo).toEqual(true)
    }
  })

  it('should be false if STR is neither', () => {
    if (STR !== 'Hello' && STR !== 'Goodbye') {
      expect(answerTwo).toEqual(false)
    }
  })

  it("should be true if STR is 'Goodbye'", () => {
    if (STR === 'Goodbye') {
      expect(answerTwo).toEqual(true)
    }
  })
})

describe('answerThree', () => {
  it('0 is a Baby', () => {
    if (AGE === 0) {
      expect(answerThree).toEqual('Baby')
    }
  })

  it('1-4 is a Toddler', () => {
    if (AGE > 0 && AGE < 5) {
      expect(answerThree).toEqual('Toddler')
    }
  })

  it('5-12 is a Child', () => {
    if (AGE > 4 && AGE < 13) {
      expect(answerThree).toEqual('Child')
    }
  })

  it('13-19 is a Teenager', () => {
    if (AGE > 12 && AGE < 20) {
      expect(answerThree).toEqual('Teenager')
    }
  })

  it('20+ is an Adult', () => {
    if (AGE > 19) {
      expect(answerThree).toEqual('Adult')
    }
  })
})
