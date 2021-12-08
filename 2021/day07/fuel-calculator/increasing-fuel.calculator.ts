export class IncreasingFuelCalculator {

  calculateFuelCostForAlignment(levels: number[]): number {
    const averageFuelLevel: number = this.determineAverageFuelLevel(levels);
    return  this.calculateNonLinearFuelCostForHorizontalAlignment(levels, averageFuelLevel);
  }

  private determineAverageFuelLevel(levels: number[]): number {
    if (!(levels || []).length) {
      throw Error('Cannot determine average level of empty array!');
    }
    const sumOfLevels: number = levels.reduce((sum: number, level: number) => sum + level, 0);
    return Math.floor(sumOfLevels / levels.length);
  }

  private calculateNonLinearFuelCostForHorizontalAlignment(levels: number[], desiredLevel: number): number {
    return levels.reduce((totalFuel: number, startingLevel: number) => totalFuel + this.triangularNumber(Math.abs(desiredLevel - startingLevel)), 0);
  }

  private triangularNumber(num: number): number {
    return num * (num + 1) / 2;
  }

}