import { BingoBoard } from "./bingo-board.interface";

export interface BingoGame {
  draws: number[];
  boards: BingoBoard[];
}