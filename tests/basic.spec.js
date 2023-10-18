test('2+2 is four', function () {
  expect(2 + 2).toBe(4)
})

test('null', function () {
  expect(null).toBe(null)
})

test('must be defined', function () {
  //   let value
  let value = 100
  expect(value).toBeDefined()
})

test('assertions', function () {
  let value = 100
  expect.assertions(1)
  expect(value).toBeDefined()
})

const animals = ['dog', 'cat', 'mouse']

test('typeof animals', function () {
  expect(Array.isArray(animals)).toBe(true)
  // Or
  expect(animals).toBeInstanceOf(Array)
})

test('contains cat', function () {
  expect(animals).toContain('cat')
})

// Exceptions

function willThrow() {
  throw new Error('Something went wrong...')
}

test('will throw error', function () {
  expect(willThrow).toThrowError() // just throw error
  expect(willThrow).toThrow('Something went wrong...') // exact error message
})
