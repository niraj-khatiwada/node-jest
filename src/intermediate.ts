export type StringUtilsType = {
  toUppercase(_: string): string
  toLowercase(_: string): string
  willThrowError(_: string): never | string
}

export class StringUtils implements StringUtilsType {
  toUppercase(val: string) {
    return val.toUpperCase()
  }
  toLowercase(val: string) {
    return val.toLocaleLowerCase()
  }

  willThrowError(val: string) {
    if (val.length === 0) {
      throw new Error('Oops!')
    }
    return val
  }
}
