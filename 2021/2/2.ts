import { Coordinate } from "./coordinate/coordinate";
import { CoordinateChange } from "./coordinate/change/coordinate-change";
import { DAY_TWO_INPUT, DAY_TWO_TEST_INPUT } from "./input";
import { CoordinateChangeFactory } from "./coordinate/change/coordinate-change.factory";
import { CoordinateChangeType } from "./coordinate/change/coordinate-change.enum";
import { Navigator } from "./navigator/navigator";
import { AimingNavigator } from "./navigator/aiming.navigator";

function getFinalLocation(): Coordinate {
  const directions: CoordinateChange[] = getInput()
  const navigator: Navigator = new Navigator(0, 0);
  directions.forEach((change: CoordinateChange) => navigator.applyCoordinateChange(change))
  return navigator.getCurrentPosition();
}

function getFinalLocationWhenAimed(): Coordinate {
  const directions: CoordinateChange[] = getInput()
  const navigator: AimingNavigator = new AimingNavigator(0, 0);
  directions.forEach((change: CoordinateChange) => navigator.applyCoordinateChange(change))
  return navigator.getCurrentPosition();
}

function getInput(): CoordinateChange[] {
  return DAY_TWO_INPUT.split('\n')
    .map((inputRow: string) => parseRow(inputRow));
}

function parseRow(row: string): CoordinateChange {
  const splitRow: string[] = row.split(' ');
  const direction: CoordinateChangeType = splitRow[0].toLocaleLowerCase() as CoordinateChangeType;
  return CoordinateChangeFactory.getCoordinateChange(direction, +splitRow[1]);
}

const finalCoordinate: Coordinate = getFinalLocation();
console.log('Part 1\n------')
console.log(`{\n\tx: ${finalCoordinate.x},\n\ty: ${finalCoordinate.y}\n}`);
console.log(`Depth: ${finalCoordinate.x * finalCoordinate.y}`)

const finalAimedCoordinate: Coordinate = getFinalLocationWhenAimed();
console.log('\n')
console.log('Part 2\n------')
console.log(`{\n\tx: ${finalAimedCoordinate.x},\n\ty: ${finalAimedCoordinate.y}\n}`);
console.log(`Depth: ${finalAimedCoordinate.x * finalAimedCoordinate.y}`)