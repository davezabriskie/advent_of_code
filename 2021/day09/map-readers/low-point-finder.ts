import { buildHeightMapEntry } from "../functions/build-height-map-entry";
import { getAdjacentReadings } from "../functions/get-adjacent-readings";

export class LowPointFinder {

  getLowPoints(readings: number[][]): HeightMapReading[] {
    const lowPoints: HeightMapReading[] = [];
    readings.forEach((entries: number[], row: number) => {
      entries.forEach((entry: number, column: number) => {
        const adjacentNumbers: HeightMapReading[] = getAdjacentReadings(row, column, readings);
        if (adjacentNumbers.every((adjacentNumber: HeightMapReading) => adjacentNumber.height > entry)) {
          lowPoints.push(buildHeightMapEntry(entry, row, column));
        }
      });
    });

    return lowPoints;
  }
  
}