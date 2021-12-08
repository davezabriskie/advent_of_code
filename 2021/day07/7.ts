import { DAY_SEVEN_TEST_INPUT, DAY_SEVEN_INPUT } from "./input";
import { LinearFuelCalculator } from "./fuel-calculator/linear-fuel.calculator";
import { IncreasingFuelCalculator } from "./fuel-calculator/increasing-fuel.calculator";

function getInput(): number[] {
  return DAY_SEVEN_INPUT.split(',')
    .map((entry: string) => parseInt(entry));
}

const input: number[] = getInput();

console.log(`Part 1: ${new LinearFuelCalculator().calculateFuelCostForAlignment(input)}`);
console.log(`Part 2: ${new IncreasingFuelCalculator().calculateFuelCostForAlignment(input)}`);