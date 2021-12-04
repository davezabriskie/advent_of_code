import { DataSummary } from "../data-summary";
import { convertBinaryStringToDecimalNumber } from "../utils/binary-converter";
import { Calculator } from "./calculator";
import { BinaryDigitPositions } from "../binary-digit-positions";

export class LifeSupportCalculator implements Calculator{

  calculateRating(data: DataSummary): number {
    const oxygenGeneratorRating: number = this.calculateOxygenGeneratorRating(data);
    const co2ScrubberRating: number = this.calculateCO2ScrubberRating(data);

    return oxygenGeneratorRating * co2ScrubberRating;
  }

  private calculateOxygenGeneratorRating(data: DataSummary): number {
    try {
      return this.calculateSubFunctionRating(data, (summary => summary.calculateMostCommonBits()));
    } catch (err) {
      throw new Error('Could not determine Oxygen Generator Rating!');
    }
  }

  private calculateCO2ScrubberRating(data: DataSummary): number {
    try {
      return this.calculateSubFunctionRating(data, (summary => summary.calculateLeastCommonBits()));
    } catch (err) {
      throw new Error('Could not determine CO2 Scubber Rating!');
    }
  }

  private calculateSubFunctionRating(data: DataSummary, bitDeterminingFunction: (data: DataSummary) => BinaryDigitPositions): number {
    let filteredData: DataSummary = new DataSummary(data.getRawData());
    for (let index = 0; index < data.getDataPointLength(); index++) {
      const bitCriteria: number = bitDeterminingFunction(filteredData)[index];
      const matchingDataPoints: string[] = [];
      filteredData.getRawData().forEach((datum: string) => {
        if (datum[index] === ('' + bitCriteria)) {
          matchingDataPoints.push(datum);
        }
      });
      if (matchingDataPoints.length === 1) {
        return convertBinaryStringToDecimalNumber(matchingDataPoints[0])
      }
      filteredData = new DataSummary(matchingDataPoints);
    }
    throw new Error('Could not determine Sub Function Rating!');
  }
}