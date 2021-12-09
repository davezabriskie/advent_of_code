import { SignalDisplay } from "../interfaces/signal-display.interface";
import { InputSignalDecoder } from "../input-signal-decoder";
import { sortString } from "../functions/sort-string.function";

export class SumOfDisplayCalculator {
  
  private decoder: InputSignalDecoder = new InputSignalDecoder();

  sumOfDisplays(input: SignalDisplay[]): number {
    let sum: number = 0;
  
    input.forEach((signalsAndResponses: SignalDisplay, index: number) => {
      const map: Map<string, number> = this.decoder.decodeInputSignals(signalsAndResponses.signals);
      const responseDigits: number = this.determineResponseDigits(map, signalsAndResponses.display);
      sum += responseDigits;
    });
  
    return sum;
  }

  private determineResponseDigits(decodeMap: Map<string, number>, digits: string[]): number {
    const response: string = digits.map((digit: string) => '' + decodeMap.get(sortString(digit)))
      .reduce((acc: string, digit: string) => acc + digit, '');
    return parseInt(response);
  }
}