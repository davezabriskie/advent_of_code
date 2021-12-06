import { Line } from "../interfaces/line.interface";
import { MappedGrid } from "../interfaces/grid.interface";
import { BaseGridBuilder } from "./base-grid-builder";

export class OrthogonalGridBuilder extends BaseGridBuilder {

  buildGrid(lines: Line[]): MappedGrid {
    const grid: number[][] = this.initializeGrid(lines);

    lines.forEach((line: Line) => {
      if (this.shouldApplyLine(line)) {
        this.updateGridWithLine(grid, line);
      }
    });
    return {
      grid
    } as MappedGrid;
  }

  private shouldApplyLine(line: Line): boolean {
    return line.start.x === line.end.x || line.start.y === line.end.y;
  }

  private updateGridWithLine(grid: number[][], line: Line): void {
    const isHorizontalLine: boolean = line.start.y === line.end.y;
    if (isHorizontalLine) {
      this.updateGridWithHorizontalLine(grid, line);
    } else {
      this.updateGridWithVerticalLine(grid, line);
    }
  }

  private updateGridWithHorizontalLine(grid: number[][], line: Line): void {
    const directionalityModifier: number = (line.end.x - line.start.x) / Math.abs(line.end.x - line.start.x);
    for (let x = 0; x <= Math.abs(line.end.x - line.start.x); x++) {
      const positionChange: number = x * directionalityModifier;

      grid[line.start.y][line.start.x + positionChange] += 1;
    }
  } 
   
  private updateGridWithVerticalLine(grid: number[][], line: Line): void {
    const directionalityModifier: number = (line.end.y - line.start.y) / Math.abs(line.end.y - line.start.y);
    for (let y = 0; y <= Math.abs(line.end.y - line.start.y); y++) {
      const positionChange: number = y * directionalityModifier;
      grid[line.start.y + positionChange][line.start.x] += 1;
    }
  } 

}