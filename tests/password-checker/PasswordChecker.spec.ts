import PasswordChecker, {
  PasswordCheckerT,
} from '../../src/password-checker/PasswordChecker'

describe('Password Checker Test Suite', function () {
  let sut: PasswordCheckerT

  beforeEach(function () {
    sut = new PasswordChecker()
  })

  describe('password should', function () {
    it('be at least 8 characters in length', function () {
      expect(sut.checkPassword('hello 1')[0]).toBe(false)
      expect(sut.checkPassword('hello world 1')[0]).toBe(true)
    })

    it('should contain at least 1 number', function () {
      expect(sut.checkPassword('hello world')[0]).toBe(false)
    })

    it('not contain uppercase letter/s', function () {
      expect(sut.checkPassword('hello world 2')[0]).toBe(true)
      expect(sut.checkPassword('Hello World 2')[0]).toBe(false)
    })
  })
})
