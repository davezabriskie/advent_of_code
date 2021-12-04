import { DAY_THREE_INPUT, DAY_THREE_TEST_INPUT } from "./input";
import { DataSummary } from "./data-summary";
import { PowerCalculator } from "./calculators/power-calculator";
import { LifeSupportCalculator } from "./calculators/life-support-calculator";

function summarizeDataPoints(): DataSummary {
  const input: string[] = getInput();
  
  return new DataSummary(input);
}

function getInput(): string[] {
  return DAY_THREE_INPUT.split('\n');
}

const data: DataSummary = summarizeDataPoints();

console.log(`Part 1: ${new PowerCalculator().calculateRating(data)}`)
console.log(`Part 2: ${new LifeSupportCalculator().calculateRating(data)}`)