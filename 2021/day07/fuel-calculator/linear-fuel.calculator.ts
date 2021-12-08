export class LinearFuelCalculator {

  calculateFuelCostForAlignment(levels: number[]): number {
    const medianFuelLevel: number = this.determineMedianFuelLevel(levels);
    return this.calculateFuelCostForHorizontalAlignment(levels, medianFuelLevel);
  }

  private determineMedianFuelLevel(levels: number[]): number {
    if (!(levels || []).length) {
      throw Error('Cannot determine median level of empty array!');
    }
    const sortedLevels: number[] = levels.sort((a: number, b: number) => a - b);
    return sortedLevels.length % 2 
      ? sortedLevels[sortedLevels.length / 2]
      : Math.round((sortedLevels[sortedLevels.length / 2 - 1] + sortedLevels[sortedLevels.length / 2]) / 2);
  }

  private calculateFuelCostForHorizontalAlignment(levels: number[], desiredLevel: number): number {
    return levels.reduce((totalFuel: number, startingLevel: number) => totalFuel + Math.abs(desiredLevel - startingLevel), 0);
  }

}