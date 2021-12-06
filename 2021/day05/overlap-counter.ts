import { MappedGrid } from "./interfaces/grid.interface";

export class OverlapCounter {

  countOverlaps(grid: MappedGrid): number {
    let overlapCount: number = 0;
    grid.grid.forEach((mappedRow: number[]) => {
      mappedRow.forEach((entry: number) => {
        if (entry > 1) {
          overlapCount++;
        }
      });
    });
    return overlapCount;
  }
}