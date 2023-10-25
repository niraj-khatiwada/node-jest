type Callback = (_: string) => void

export function toUpperCaseWithCallback(value: string, callback: Callback) {
  if (value.length === 0) {
    callback('Invalid argument')
    return
  }
  return value.toUpperCase()
}

console.log('hello')
