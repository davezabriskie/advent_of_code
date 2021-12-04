import { CoordinatePlane } from "../coordinate/coordinate-plane";
import { CoordinateChange } from "../coordinate/change/coordinate-change";
import { Coordinate } from "../coordinate/coordinate";

export class Navigator {
  protected coordinatePlane: CoordinatePlane;

  constructor(initialX: number, initialY: number) {
    this.coordinatePlane = new CoordinatePlane(initialX, initialY);
 }

  applyCoordinateChange(change: CoordinateChange): Coordinate {
    const coordinateChange: Coordinate = change.calculateCoordinateChange();
    return this.coordinatePlane.updatePosition(coordinateChange);
  }

  getCurrentPosition(): Coordinate {
    return this.coordinatePlane.getCurrentPosition();
  }
}