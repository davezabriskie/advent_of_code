import { sortString } from "./sort-string.function";

export function reverseMap(map: Map<number, string>): Map<string, number> {
  const reversedMap: Map<string, number> = new Map();

  map.forEach((value: string, key: number) => reversedMap.set(sortString(value), key));

  return reversedMap;
}