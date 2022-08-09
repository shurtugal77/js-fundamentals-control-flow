const { didPass, answer } = require('../src/boolean-conditions')

describe('Boolean conditions getResult:', () => {
  it("Sets answer to 'Well done, you passed!' with true or 'Sorry, try again!' with false", () => {
    if (didPass) {
      expect(answer).toEqual('Well done, you passed!')
      return
    }

    expect(answer).toEqual('Sorry, try again!')
  })
})
