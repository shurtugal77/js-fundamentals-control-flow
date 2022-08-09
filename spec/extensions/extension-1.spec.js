const { a, b } = require('../../src/extensions/example.js')

describe('example functions', () => {
  it("returns the string 'Byeee, friend :)'", () => {
    expect(a()).toEqual('Byeee, friend :)')
  })

  it('doubles 4 to 8', () => {
    expect(b(4)).toEqual(8)
  })

  it('doubles 0 to 0', () => {
    expect(b(0)).toEqual(0)
  })
})
