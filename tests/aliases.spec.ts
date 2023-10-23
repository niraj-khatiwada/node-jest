describe('jest alias: only', function () {
  // only runs that test
  // only can also be used in describe as describe.only
  // use skip instead of only
  // alternative way is fit()

  // fit("...",function(){})

  it(//   .only
  'only run this one', function () {
    console.log('This should be printed.')
  }) // only this one will run, all others will be skipped (even in the next describe)

  it("this won't run", function () {
    console.log('This should not be printed.')
  })
})

describe('jest alias: skip', function () {
  it("won't be skipped", function () {
    console.log('This won"t be skipped.')
  })

  // will skip this particular test
  // alternative way is xit()

  // xit("...",function(){})
  it.skip('will be skipped', function () {
    console.log('This will be skipped.')
  })
})

describe('jest alias: todo', function () {
  // ->todo is usually used for TDD. It can only have description and later when you are ready to implement the feature, you can write actual test callback
  it.todo('remaining to be implemented')
})

describe('jest alias: concurrent', function () {
  // concurrent is useful when you want to run async code concurrently with an optional timeout
  // You can pass an optional 3rd argument which is timeout in seconds. Default = 5s
  it.concurrent('concurrent', async function () {
    expect(2 + 2).toBe(4)
  })
})
