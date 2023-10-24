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
