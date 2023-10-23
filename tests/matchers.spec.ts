import { toUppercase, getInfo } from '../src/matchers'

describe('Utils test suite', function () {
  it('should return uppercase for valid string', function () {
    // arrange
    const sut = toUppercase // SUT = System Under Test
    const expected = 'HELLO'

    // act
    const actual = sut('hello')

    // assert
    expect(actual).toBe(expected) // This is a jest matcher
  })

  it('should return info for valid string', function () {
    const sut = getInfo
    const expected = {}
    const actual = sut('hello')
    expect(actual.extra).toEqual(expected) // toBe is only for primitive data types

    expect(actual.characters).toHaveLength(5)
    expect(actual.size).toBe(5)
    expect(actual.characters.length).toBe(5)

    expect(actual.characters).toEqual(['h', 'e', 'l', 'l', 'o'])
    expect(actual.characters).toEqual(
      expect.arrayContaining(['l', 'l', 'o', 'h', 'e'])
    ) // If order does not matter in array

    expect(actual.characters).toContain<string>('l') // Contains character

    // Undefined
    expect(actual.extra).not.toBe(undefined)
    expect(actual.extra).not.toBeUndefined()
    expect(actual.extra).toBeDefined()
  })
})
