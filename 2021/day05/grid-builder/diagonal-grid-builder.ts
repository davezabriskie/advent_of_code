import { Line } from "../interfaces/line.interface";

import { MappedGrid } from "../interfaces/grid.interface";
import { BaseGridBuilder } from "./base-grid-builder";

export class DiagonalGridBuilder extends BaseGridBuilder {
  
  buildGrid(lines: Line[]): MappedGrid {
    const grid: number[][] = this.initializeGrid(lines);
    lines.forEach((line: Line) => {
      this.updateGridWithLine(grid, line);
    });

    return {
      grid
    } as MappedGrid;
  }

  private updateGridWithLine(grid: number[][], line: Line): void {
    const xDirectionalityModifier: number = this.calculateDirectionalityModifier(line.start.x, line.end.x);
    const yDirectionalityModifier: number = this.calculateDirectionalityModifier(line.start.y, line.end.y);
    // problem statement guarantees 45deg lines, so leveraging the same rate of change for both coordinates is safe
    const maxChange: number = Math.max(Math.abs(line.end.x - line.start.x), Math.abs(line.end.y - line.start.y));
    for (let x = 0; x <= maxChange; x++) {
      const xPositionChange: number = x * xDirectionalityModifier;
      const yPositionChange: number = x * yDirectionalityModifier;
      grid[line.start.y + yPositionChange][line.start.x + xPositionChange] += 1;
    }
  }

  private calculateDirectionalityModifier(start: number, end: number): number {
    const difference: number = end - start;
    if (!difference) {
      return 0;
    }
    return difference / Math.abs(end - start);
  }
}