import { DAY_EIGHT_TEST_INPUT, DAY_EIGHT_INPUT } from "./input";
import { SignalDisplay } from "./interfaces/signal-display.interface";
import { UniquelySegmentedCalculator } from "./calculators/uniquely-segmented.calculator";
import { SumOfDisplayCalculator } from "./calculators/sum-of-display.calculator";
import { InputParser } from "./input-parser";

const input: SignalDisplay[] = new InputParser().parseInput(DAY_EIGHT_INPUT);

console.log(`Part 1: ${new UniquelySegmentedCalculator().determineUsageCountOfUniquelySegmentedNumbers(input)}`);
console.log(`Part 2: ${new SumOfDisplayCalculator().sumOfDisplays(input)}`);