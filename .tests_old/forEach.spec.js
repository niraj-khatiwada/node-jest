// beforeEach, afterEach, beforeAll, afterAll

beforeAll(function () {
  console.log('Runs before all the test.')
})

afterAll(function () {
  console.log('Runs after all the test.')
})

beforeEach(function () {
  console.log('Runs before  each test.')
})

afterEach(function () {
  console.log('Runs after each test.')
})

test('test 1', function () {
  console.log('SAMPLE TEST 1')
})

test('test 2', function () {
  console.log('SAMPLE TEST 2')
})
