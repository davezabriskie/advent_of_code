import { LowPointFinder } from "./low-point-finder";
import { getAdjacentReadings } from "../functions/get-adjacent-readings";

export class BasinSizeCalculator {

  private lowPointFinder: LowPointFinder = new LowPointFinder();

  private determineBasinSize: Function = (readings: number[][], heightMapEntry: HeightMapReading, pointsInBasin: Set<string>) => {
    pointsInBasin.add(this.coordinateToKey(heightMapEntry.coordinate));
    [...getAdjacentReadings(heightMapEntry.coordinate.row, heightMapEntry.coordinate.column, readings)]
      .filter((adjacentReading: HeightMapReading) => adjacentReading.height < 9 && adjacentReading.height > heightMapEntry.height)
      .forEach((adjacentReading: HeightMapReading) => this.determineBasinSize(readings, adjacentReading, pointsInBasin))
  }
  
  findBasinSizes(readings: number[][]): number[] {
    const lowPoints: HeightMapReading[] = this.lowPointFinder.getLowPoints(readings);
    return lowPoints.map((lowPoint: HeightMapReading) => this.findBasinSize(readings, lowPoint));
  }
  
  private findBasinSize(readings: number[][], basinLowPoint: HeightMapReading): number {
    const basin = new Set<string>()
    this.determineBasinSize(readings, basinLowPoint, basin);
    return basin.size
  }
  
  private coordinateToKey(coordinate: Coordinate): string {
    return `${coordinate.row}-${coordinate.column}`;
  }
  
}