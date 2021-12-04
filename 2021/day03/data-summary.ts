import { BinaryDigitPositions } from "./binary-digit-positions";

export class DataSummary {
  private dataPointCount: number = 0;
  private dataPointLength: number = 0;
  private sums: BinaryDigitPositions = {} as BinaryDigitPositions;
  private rawData: string[] = [];

  constructor(data: string[]) {
    this.summarizeData([...data]);
  }

  private summarizeData(input: string[]): void {
    this.rawData = input;
    this.dataPointCount = input.length;
    if (this.dataPointCount) {
      this.dataPointLength = input[0].length;
      
      input.forEach((binaryString: string) => {
        const digits: string[] = binaryString.split('');
        digits.forEach((digit, index) => this.sums[index] = (this.sums[index] || 0) + parseInt(digit))
      });
    }
  }
  getDataPointLength(): number {
    return this.dataPointLength;
  }

  getSums(): BinaryDigitPositions {
    return this.sums;
  }

  getRawData(): string[] {
    return this.rawData;
  }

  calculateMostCommonBits(): BinaryDigitPositions {
    if (!this.dataPointCount) {
      throw new Error('Cannot determine most common bits with no data!');
    }
    const mostCommonBits: BinaryDigitPositions = {};
    Object.entries(this.sums)
      .forEach(([key, value]: [string, any]) => mostCommonBits[+key] = Math.round(value / this.dataPointCount));
    return mostCommonBits
  }

  calculateLeastCommonBits(): BinaryDigitPositions {
    if (!this.dataPointCount) {
      throw new Error('Cannot determine most common bits with no data!');
    }
    const mostCommonBits: BinaryDigitPositions = {};
    Object.entries(this.sums)
      .forEach(([key, value]: [string, any]) => mostCommonBits[+key] = 1 - Math.round(value / this.dataPointCount));
    return mostCommonBits
  }
}