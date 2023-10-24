import Spies from '../../src/doubles/spies'

describe('Spies Testing Suite', function () {
  it('should return uppercase value', function () {
    const sut = new Spies()
    const toUppercaseSpy = jest.spyOn(sut, 'toUppercase')
    sut.toUppercase('hello')
    expect(toUppercaseSpy).toBeCalledWith('hello')
    expect(toUppercaseSpy).toReturnWith('HELLO')
  })
})
