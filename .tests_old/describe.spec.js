const ferrari = {
  isFast: true,
  model: 2019,
}

describe('ferrari', function () {
  test('isFast', function () {
    expect(ferrari.isFast).toBe(true)
  })
  test('model', function () {
    expect(ferrari.model).toBe(2019)
  })
})
