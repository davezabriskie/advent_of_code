import { BingoGame } from "./interfaces/bingo-problem.interface";
import { WinState } from "./interfaces/win-state.interface";
import { BingoBoard } from "./interfaces/bingo-board.interface";
import { Coordinate } from "./interfaces/coordinate.interface";

export class BingoRunner {

  determineWinningScore(input: BingoGame): number {
    const winningBoard: WinState = this.findWinningBingoBoard(input);
    return this.calculateScore(winningBoard);
  }

  determineLastWinningScore(input: BingoGame): number {
    const losingBoard: WinState = this.findLastWinningBingoBoard(input);
    return this.calculateScore(losingBoard);
  }
  
  private findWinningBingoBoard(input: BingoGame): WinState {
    for (let drawIndex = 0; drawIndex < input.draws.length; drawIndex++) {
      for (let board of input.boards) {
        const currentDraws: number[] = input.draws.slice(0, drawIndex);
        if (this.determineIfWinningBoard(currentDraws, board)) {
          return {
            draws: currentDraws,
            board
          };
        }
      }
    }
    throw new Error('No winning board found!');
  }
  
  private findLastWinningBingoBoard(input: BingoGame): WinState {
    let lastWinningBoard: WinState;
    const winningBoards: BingoBoard[] = [];
    for (let drawIndex = 0; drawIndex < input.draws.length; drawIndex++) {
      for (let board of input.boards) {
        const currentDraws: number[] = input.draws.slice(0, drawIndex);
        if (this.determineIfWinningBoard(currentDraws, board)) {
          if (!winningBoards.includes(board)) {
            winningBoards.push(board);
            lastWinningBoard = {
              draws: currentDraws,
              board
            };
          }
        }
      }
    }
    if (!lastWinningBoard) {
      throw new Error('No winning board found!');
    }
    return lastWinningBoard;
  }

  private determineIfWinningBoard(drawnNumbers: number[], board: BingoBoard): boolean {
    const lastDrawn: number = drawnNumbers[drawnNumbers.length - 1];
    if (board.numbers.has(lastDrawn)) {
      const newMatchCoordinate: Coordinate = board.numbers.get(lastDrawn);
      const hasWinningRow = this.hasFullRow(drawnNumbers, board.puzzle[newMatchCoordinate.row]);
      const hasWinningColumn = this.hasFullColumn(drawnNumbers, board.puzzle, newMatchCoordinate.column);
      return hasWinningRow || hasWinningColumn;
    }
    return false;
  }
  
  private hasFullRow(drawnNumbers: number[], row: number[]): boolean {
    return row.every((entry: number) => drawnNumbers.includes(entry));
  }
  
  private hasFullColumn(drawnNumbers: number[], bingoPuzzle: number[][], column: number): boolean {
    return bingoPuzzle.every((row: number[]) => drawnNumbers.includes(row[column]));
  }
  
  private calculateScore(winState: WinState): number {
    let runningSum: number = 0;
    winState.board.puzzle.forEach((boardRow: number[]) => {
      boardRow.forEach((entry: number) => {
        if (!winState.draws.includes(entry)) {
          runningSum += entry;
        }
      })
    });
    return winState.draws[winState.draws.length - 1] * runningSum;
  }
}