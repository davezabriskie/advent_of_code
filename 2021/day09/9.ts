import { DAY_NINE_INPUT, DAY_NINE_TEST_INPUT } from "./input";
import { LowPointFinder } from "./map-readers/low-point-finder";
import { BasinSizeCalculator } from "./map-readers/basin-size-calculator";
import { InputParser } from "./input-parser";


function calculateRiskLevel(matrix: number[][]): number {
  const lowPoints: HeightMapReading[] = new LowPointFinder().getLowPoints(matrix);
  return lowPoints.reduce((totalRisk: number, lowPoint: HeightMapReading) => totalRisk + lowPoint.height + 1, 0)
}

function determineLargestBasinSizes(matrix: number[][], numberOfBasins: number): number {
  const orderedBasinSizes: number[] = new BasinSizeCalculator().findBasinSizes(matrix).sort((a: number, b: number) => a - b);
  return orderedBasinSizes.slice(-numberOfBasins)
    .reduce((product: number, basinSize: number) => product * basinSize, 1);
}

const readings: number[][] = new InputParser().parseInput(DAY_NINE_INPUT);

console.log(`Part 1: ${calculateRiskLevel(readings)}`);
console.log(`Part 1: ${determineLargestBasinSizes(readings, 3)}`);