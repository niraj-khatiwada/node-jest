export function toUppercase(val: string) {
  return val.toUpperCase()
}

type GetInfo = {
  uppercase: string
  lowercase: string
  characters: string[]
  size: number
  extra: Object | undefined
}

export function getInfo(val: string): GetInfo {
  return {
    uppercase: val.toUpperCase(),
    lowercase: val.toLowerCase(),
    characters: Array.from(val),
    size: val.length,
    extra: {},
  }
}
