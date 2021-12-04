import { DAY_ONE_INPUT } from './input';

function getCountOfIncrease(): number {
  return readInput()
    .reduce(countIndicesLargerThanPrevious, 0);
}

function getCountOfIncreaseGrouped(groupSize: number = 3): number {
  return readInput()
    .flatMap((value, index, array) => sumIndicesByWindow(groupSize, value, index, array))
    .reduce(countIndicesLargerThanPrevious, 0);
}

function readInput(): number[] {
  return DAY_ONE_INPUT.split('\n')
    .map(entry => parseInt(entry));
}

function countIndicesLargerThanPrevious(accumulator: number, currentValue: number, index: number, array: number[]): number {
  if (index === 0) {
    return accumulator;
  } 
  return currentValue > array[index - 1] ? accumulator + 1  : accumulator
}

function sumIndicesByWindow(windowSize: number, value: number, index: number, array: number[]): number[] {
  if (index < windowSize - 1) {
    return [];
  }
  return [array[index - 2] + array[index - 1]  + value];
}

console.log(`Part 1: ${getCountOfIncrease()}`);
console.log(`Part 2: ${getCountOfIncreaseGrouped()}`);