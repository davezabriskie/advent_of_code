import { Coordinate } from "./coordinate";

export class CoordinatePlane {
  private x: number;
  private y: number;

  constructor(initialX: number, initialY: number) {
    this.x = initialX;
    this.y = initialY;
  }

  getCurrentPosition(): Coordinate {
    return {
      x: this.x,
      y: this.y
    };
  }

  updatePosition(change: Coordinate): Coordinate {
    this.x += change.x;
    this.y += change.y;
    return this.getCurrentPosition();
  }
}