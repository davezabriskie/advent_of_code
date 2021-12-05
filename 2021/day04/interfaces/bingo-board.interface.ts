import { Coordinate } from "./coordinate.interface";

export interface BingoBoard {
  puzzle: number[][];
  numbers: Map<number, Coordinate>;
}
