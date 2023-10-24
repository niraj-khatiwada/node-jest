import { toUpperCaseWithCallback } from '../../src/doubles/fakes'

describe('Mocks Testing Suite', function () {
  const callbackMock = jest.fn()

  afterEach(function () {
    callbackMock.mockReset()
  })

  it('should return return invalid argument for empty value', function () {
    const sut = toUpperCaseWithCallback
    const actual = sut('', callbackMock)
    expect(actual).toBeUndefined()
    expect(callbackMock).toBeCalledWith('Invalid argument')
    expect(callbackMock).toBeCalledTimes(1)
  })

  it('should return return uppercase value for valid argument', function () {
    const sut = toUpperCaseWithCallback
    const actual = sut('hello', callbackMock)
    expect(actual).toBe('HELLO')
    expect(callbackMock).toBeCalledTimes(0)
  })
})
