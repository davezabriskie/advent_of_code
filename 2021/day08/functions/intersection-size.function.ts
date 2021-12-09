export function intersectionSize(value: string, otherValue: string): number {
  const sharedCharCount: number = value.split('').filter((char: string) => otherValue.includes(char)).length
  return otherValue.length - sharedCharCount;
}