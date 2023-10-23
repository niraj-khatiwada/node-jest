import crypto from 'crypto'

import { randomUUID, randomBytes } from '../src/app'

test('spyOn', function () {
  jest.spyOn(crypto, 'randomUUID').mockImplementation(() => 'uuid')
  const uuid = randomUUID()
  expect(uuid).toBe('uuid')

  jest.spyOn(crypto, 'randomBytes').mockImplementation(() => 'bytes')
  const bytes = randomBytes()
  expect(bytes).toBe('bytes')
})
