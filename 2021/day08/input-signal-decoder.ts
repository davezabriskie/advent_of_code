import { intersectionSize } from "./functions/intersection-size.function";
import { reverseMap } from "./functions/reverse-map.function";

/**
 *    | digit | lines | unique |
 *    |   0   |   6   |        |  
 *    |   1   |   2   |   *    |
 *    |   2   |   5   |        |
 *    |   3   |   5   |        |
 *    |   4   |   4   |   *    |
 *    |   5   |   5   |        |
 *    |   6   |   6   |        |
 *    |   7   |   3   |   *    |
 *    |   8   |   7   |   *    |
 *    |   9   |   6   |        |
 * 
 *    digits with 6 lines
 *    | digit |  logic for determining digit  | 
 *    |   0   | wholly contains segments of 7 |
 *    |   6   |                               |
 *    |   9   | wholly contains segments of 4 |
 * 
 * 
 *    digits with 5 lines
 *    | digit |     logic for determining digit    | 
 *    |   2   |                                    |
 *    |   3   |    wholly contains segments of 7   |
 *    |   5   | difference from segments of 6 is 1 |
 * 
 */
export class InputSignalDecoder {

  // grossly big method since the order in which the signals are parsed and decoded is important
  decodeInputSignals(signals: string[]): Map<string, number> {
    const digitToCode: Map<number, string> = new Map();
  
    // special known cases
    signals.sort()
      .forEach((signal: string) => {
        if (signal.length === 2) {
          digitToCode.set(1, signal);
        } else if (signal.length === 3) {
          digitToCode.set(7, signal);
        } else if (signal.length === 4) {
          digitToCode.set(4, signal);
        } else if (signal.length === 7) {
          digitToCode.set(8, signal);
        }
      });
  
    signals.filter((value: string) => value.length === 6)
      .forEach((value: string) => {
        if (!intersectionSize(value, digitToCode.get(4))) {
          digitToCode.set(9, value);
        } else if (!intersectionSize(value, digitToCode.get(7))) {
          digitToCode.set(0, value);
        } else {
          digitToCode.set(6, value);
        }
      });
  
    signals.filter((value: string) => value.length === 5)
      .forEach((value: string) => {
        if (!intersectionSize(value, digitToCode.get(7))) {
          digitToCode.set(3, value);
        } else if (intersectionSize(value, digitToCode.get(6)) === 1) {
          digitToCode.set(5, value);
        } else {
          digitToCode.set(2, value);
        }
      });
  
    return reverseMap(digitToCode);
  }
}