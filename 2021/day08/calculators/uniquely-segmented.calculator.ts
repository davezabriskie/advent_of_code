import { SignalDisplay } from "../interfaces/signal-display.interface";

export class UniquelySegmentedCalculator {
  determineUsageCountOfUniquelySegmentedNumbers(input: SignalDisplay[]): number {
    return input.map((signalsAndResponses: SignalDisplay) => signalsAndResponses.display)
      .map((responses: string[]) => responses.filter((signal: string) => [2, 3, 4, 7].includes(signal.length)).length)
      .reduce((sum: number, value: number) => sum + value, 0);
  }
}