export type PasswordCheckerT = {
  checkPassword(_: string): [boolean, string?]
}

class PasswordChecker implements PasswordCheckerT {
  checkPassword(
    password: string
  ): ReturnType<PasswordCheckerT['checkPassword']> {
    if (password.length < 8) {
      return [false, 'Password must be at least 8 characters in length']
    }

    if (!/\d+/g.test(password)) {
      return [false, 'Password must contain at least 1 number.']
    }
    // no uppercase
    if (password.toLowerCase() !== password) {
      return [false, 'Password should not contain any uppercase characters.']
    }
    return [true]
  }
}

export default PasswordChecker
