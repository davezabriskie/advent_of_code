import { Line } from "../interfaces/line.interface";

export abstract class BaseGridBuilder {

  protected initializeGrid(lines: Line[]): number[][] {
    let maxX: number = 0;
    let maxY: number = 0;
    lines.forEach((line: Line) => {
      const xMaxmima: number = Math.max(line.start.x, line.end.x);
      const yMaxmima: number = Math.max(line.start.y, line.end.y);
      maxX = Math.max(xMaxmima, maxX);
      maxY = Math.max(yMaxmima, maxY);
    });

    const row: number[] = new Array(maxX + 1).fill(0);
    const grid: number[][] = [];
    for (let index = 0; index <= maxY; index++) {
      grid.push([...row])
    }

    return grid;
  }
}