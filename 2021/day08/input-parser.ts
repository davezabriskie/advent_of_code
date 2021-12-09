import { SignalDisplay } from "./interfaces/signal-display.interface";

export class InputParser {
  parseInput(input: string): SignalDisplay[] {
    return input.split('\n')
      .map((record: string) => this.parseInputRow(record));
  }

  private parseInputRow(record: string): SignalDisplay {
    const splitRecord: string[] = record.split('|');
    return {
      signals: splitRecord[0].trim().split(' ').map((entry: string) => entry.trim()),
      display: splitRecord[1].trim().split(' ').map((entry: string) => entry.trim())
    } as SignalDisplay;
  }
}