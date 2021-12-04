import { DataSummary } from "../data-summary";
import { BinaryDigitPositions } from "../binary-digit-positions";
import { convertBinaryStringToDecimalNumber } from "../utils/binary-converter";
import { Calculator } from "./calculator";

export class PowerCalculator implements Calculator {
  
  calculateRating(data: DataSummary): number {
    const gamma: number = this.calculateGamma(data);
    const epsilon: number = this.calculateEpsilon(data);
    return gamma * epsilon;
  }
  
  private calculateGamma(summary: DataSummary): number {
    return this.calcuateSubSystemRating(summary, (data: DataSummary) => data.calculateMostCommonBits());
  }

  private calculateEpsilon(summary: DataSummary): number {
    return this.calcuateSubSystemRating(summary, (data: DataSummary) => data.calculateLeastCommonBits());
  }

  private calcuateSubSystemRating(summary: DataSummary, calculateCommonBits: (data: DataSummary) => BinaryDigitPositions): number {
    const commonBits: BinaryDigitPositions = calculateCommonBits(summary);
    const positionsOfInterest: number[] = new Array(summary.getDataPointLength()).fill(0);
    const gammaInBinary: string = positionsOfInterest.reduce((accumulator: string, _: number, index: number) => accumulator + commonBits[index], '');
    return convertBinaryStringToDecimalNumber(gammaInBinary);
  }
}