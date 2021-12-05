import { BingoBoard } from "./bingo-board.interface";

export interface WinState {
  board: BingoBoard,
  draws: number[]
}
