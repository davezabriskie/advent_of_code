import { CoordinateChange } from "./coordinate-change";
import { Coordinate } from "../coordinate";

export class ForwardCoordinateChange extends CoordinateChange {

  private distance: number;

  constructor(distance: number) {
    super();
    this.distance = distance;
  }    

  calculateCoordinateChange(): Coordinate {
    return {
      x: this.distance,
      y: 0
    };
  }

}