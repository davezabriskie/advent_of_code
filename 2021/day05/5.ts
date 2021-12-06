import { Parser } from "./parser";
import { Line } from "./interfaces/line.interface";
import { MappedGrid } from "./interfaces/grid.interface";
import { OrthogonalGridBuilder } from "./grid-builder/orthogonal-grid-builder";
import { OverlapCounter } from "./overlap-counter";
import { DiagonalGridBuilder } from "./grid-builder/diagonal-grid-builder";

function partOne(): number {
  const lines: Line[] = new Parser().getInput();
  const grid: MappedGrid = new OrthogonalGridBuilder().buildGrid(lines);
  return new OverlapCounter().countOverlaps(grid);
}

function partTwo(): number {
  const lines: Line[] = new Parser().getInput();
  const grid: MappedGrid = new DiagonalGridBuilder().buildGrid(lines);
  return new OverlapCounter().countOverlaps(grid);
}


console.log(`Part 1: ${partOne()}`);
console.log(`Part 2: ${partTwo()}`);