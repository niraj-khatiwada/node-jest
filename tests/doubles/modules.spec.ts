jest.mock('../../src/doubles/modules', () => ({
  ...jest.requireActual('../../src/doubles/modules'),
  calculateComplexity: () => 10,
}))

import * as utils from '../../src/doubles/modules'

jest.mock('crypto', () => ({
  randomUUID: () => 'random',
}))

describe('Modules Testing Suite', function () {
  it('calculate complexity for empty object', function () {
    const sut = utils.calculateComplexity
    expect(sut({} as any)).toBe(10)
  })

  it('should return correct uppercase value', function () {
    const sut = utils.toUppercase
    expect(sut('hello')).toBe('HELLO')
  })

  it('should return correct toLowerCaseWithId', function () {
    const sut = utils.toLowerCaseWithId
    expect(sut('ABC')).toBe('abcrandom')
  })
})
