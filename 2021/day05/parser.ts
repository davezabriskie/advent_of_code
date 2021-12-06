import { DAY_FIVE_INPUT, DAY_FIVE_TEST_INPUT } from "./input";
import { Line } from "./interfaces/line.interface";
import { Coordinate } from "./interfaces/coordinate.interface";

export class Parser {

  getInput(): Line[] {
    return DAY_FIVE_INPUT.split('\n')
      .map((row: string) => this.parseLineFromRow(row))
  }

  private parseLineFromRow(row: string): Line {
    const coordinates: string[] = row.split(' -> ');
    return {
      start: this.parseCoordinate(coordinates[0]),
      end: this.parseCoordinate(coordinates[1])
    } as Line;
  }

  private parseCoordinate(csvCoordinate: string): Coordinate {
    const coordinate: string[] = csvCoordinate.split(',');
    return {
      x: parseInt(coordinate[0]),
      y: parseInt(coordinate[1])
    } as Coordinate;
  }
}