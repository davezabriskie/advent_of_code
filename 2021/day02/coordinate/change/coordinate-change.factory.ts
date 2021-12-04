import { CoordinateChange } from "./coordinate-change";
import { CoordinateChangeType } from "./coordinate-change.enum";
import { UpCoordinateChange } from "./up";
import { ForwardCoordinateChange } from "./forward";
import { DownCoordinateChange } from "./down";

export class CoordinateChangeFactory {

  private static readonly CHANGE_MAP: {[key in CoordinateChangeType]: (distance: number) => CoordinateChange} = {
    forward: (distance: number) => new ForwardCoordinateChange(distance),
    down: (distance: number) => new DownCoordinateChange(distance),
    up: (distance: number) => new UpCoordinateChange(distance),
  }

  static getCoordinateChange(direction: CoordinateChangeType, distance: number): CoordinateChange {
    return CoordinateChangeFactory.CHANGE_MAP[direction](distance);
  }

}