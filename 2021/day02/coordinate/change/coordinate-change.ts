import { Coordinate } from "../coordinate";

export abstract class CoordinateChange {
  abstract calculateCoordinateChange(): Coordinate;
}