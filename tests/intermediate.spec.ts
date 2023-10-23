/**
 * First Principles
 * F = Fast -> Faster feedback
 * I = Independent/Isolated -> Independent from one-another and external environment
 * R = Repeatable -> Idempotent
 * S = Self-Validating -> Atomic; whether pass or fail
 * T = Thorough -> Cover very aspects/scenarios
 */

// Hooks

import { StringUtils, StringUtilsType } from '../src/intermediate'

describe('StringUtils Test Suite', function () {
  let sut: StringUtilsType
  beforeEach(function () {
    sut = new StringUtils()
  })
  it('should return correct uppercase', function () {
    const actual = sut.toUppercase('hello')
    expect(actual).toBe('HELLO')
  })

  it('should throw error', function (done) {
    expect(function () {
      sut.willThrowError('')
    }).toThrowError()
    expect(function () {
      return sut.willThrowError('')
    }).toThrow('Oops!')

    // Or
    try {
      sut.willThrowError('')
      done('willThrowError should throw error')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty('message', 'Oops!')
      done()
    }
  })
})
