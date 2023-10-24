import { toUpperCaseWithCallback } from '../../src/doubles/fakes'

describe('Fakes Testing Suite', function () {
  it('should return return invalid argument for empty value', function () {
    const sut = toUpperCaseWithCallback
    const actual = sut('', () => {}) // () => {} is fake here

    expect(actual).toBeUndefined()
  })

  it('should return return uppercase value for valid argument', function () {
    const sut = toUpperCaseWithCallback
    const actual = sut('hello', () => {}) // () => {} is fake here

    expect(actual).toBe('HELLO')
  })
})
