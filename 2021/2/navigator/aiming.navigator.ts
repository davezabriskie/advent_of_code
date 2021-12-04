import { CoordinatePlane } from "../coordinate/coordinate-plane";
import { CoordinateChange } from "../coordinate/change/coordinate-change";
import { Coordinate } from "../coordinate/coordinate";
import { Navigator } from "./navigator";
import { ForwardCoordinateChange } from "../coordinate/change/forward";

export class AimingNavigator extends Navigator {
  private aim: number = 0;

  constructor(initialX: number, initialY: number) {
    super(initialX, initialY);
 }

  applyCoordinateChange(change: CoordinateChange): Coordinate {
    const coordinateChange: Coordinate = change.calculateCoordinateChange();
    this.updateAim(coordinateChange.y);
    if (change instanceof ForwardCoordinateChange) {
      const aimedCoordinateChange: Coordinate = {
        x: coordinateChange.x,
        y: coordinateChange.x * this.aim
      };
      return this.coordinatePlane.updatePosition(aimedCoordinateChange);
    }
    return this.coordinatePlane.getCurrentPosition();
  }

  private updateAim(change: number): void {
    this.aim += change;
  }

}