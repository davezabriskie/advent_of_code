export function convertBinaryStringToDecimalNumber(binaryString: string): number {
  let decimalValue: number = 0;

  binaryString.split('')
    .reverse()
    .forEach((value: string, index: number) => decimalValue += Math.pow(2, index) * parseInt(value));

  return decimalValue;
}