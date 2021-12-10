import { buildHeightMapEntry } from "./build-height-map-entry";

export function getAdjacentReadings(row: number, column: number, matrix: number[][]): HeightMapReading[] {
  const neighbors: HeightMapReading[] = [];
  if (row) {
    neighbors.push(buildHeightMapEntry(matrix[row - 1][column], row - 1, column));
  }
  if (row < matrix.length - 1) {
    neighbors.push(buildHeightMapEntry(matrix[row + 1][column], row + 1, column));
  }
  if (column) {
    neighbors.push(buildHeightMapEntry(matrix[row][column - 1], row, column - 1));
  }
  if (column < matrix[row].length - 1) {
    neighbors.push(buildHeightMapEntry(matrix[row][column + 1], row, column + 1));
  }
  return neighbors;
}
