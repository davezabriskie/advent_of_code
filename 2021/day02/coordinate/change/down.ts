import { CoordinateChange } from "./coordinate-change";
import { Coordinate } from "../coordinate";

export class DownCoordinateChange extends CoordinateChange {

  private distance: number;

  constructor(distance: number) {
    super();
    this.distance = distance;
  }    

  calculateCoordinateChange(): Coordinate {
    return {
      x: 0,
      y: this.distance
    };
  }

}