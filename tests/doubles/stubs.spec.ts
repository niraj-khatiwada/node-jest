import { calculateComplexity } from '../../src/doubles/stubs'

describe('Stubs Testing Suite', function () {
  it('should return string info complexity', function () {
    const sut = calculateComplexity

    const stringInfo = {
      size: 5,
      extra: {
        field1: 'value 1',
      },
    }
    const actual = sut(stringInfo as any)
    expect(actual).toBe(5)

    const stringInfo2 = {
      size: 5,
    }
    expect(sut(stringInfo2 as any)).toBe(0)
  })
})
