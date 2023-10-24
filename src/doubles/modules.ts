import { randomUUID } from 'crypto'

type GetInfo = {
  uppercase: string
  lowercase: string
  characters: string[]
  size: number
  extra: Object | undefined
}

export function calculateComplexity(stringInfo: GetInfo) {
  return Object.keys(stringInfo.extra ?? {}).length * stringInfo.size
}

export function toUppercase(value: string) {
  return value.toUpperCase()
}

export function toLowerCaseWithId(value: string) {
  return value.toLowerCase() + randomUUID()
}
