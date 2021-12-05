import { BingoGame } from "./interfaces/bingo-problem.interface";
import { DAY_FOUR_INPUT, DAY_FOUR_TEST_INPUT } from "./input";
import { BingoBoard } from "./interfaces/bingo-board.interface";
import { Coordinate } from "./interfaces/coordinate.interface";

export class Parser {
  
  parseInput(): BingoGame {
    const problem: BingoGame = {} as BingoGame;

    const splitInput: string[] = DAY_FOUR_INPUT.split('\n');
    problem.draws = this.readDraws(splitInput);

    const prunedInput: string[] = this.pruneLeadingEmptyLine(splitInput);
    problem.boards = this.parseBoards(prunedInput);
    
    return problem;
  }

  private readDraws(input: string[]): number[] {
    return (input.splice(0, 1)[0]).split(',').map((draw: string) => parseInt(draw));
  }

  private pruneLeadingEmptyLine(input: string[]): string[] {
    if (!input[0]) {
      return input.slice(1);
    }
    return input;
  }

  private parseBoards(input: string[]): BingoBoard[] {
    let boards: BingoBoard[] = [];
    let boardCount: number = 0;
    input.map((row: string) => {
      if (!boards[boardCount]) {
        boards.push({
          puzzle: [],
          numbers: new Map()
        });
      }
      if (row) {
        const entries: number[] = this.parseBingoEntries(row);
        boards[boardCount].puzzle.push(entries);
        entries.forEach((entry: number, index: number) => {
          const coordinate: Coordinate = {
            column: index,
            row: boards[boardCount].puzzle.length - 1
          }
          boards[boardCount].numbers.set(entry, coordinate);
        });
      } else {
        boardCount++;
      }
    });
    return boards;
  }

  private parseBingoEntries(row: string): number[] {
    return row.split(' ')
      .filter((entry: string) => !!entry)
      .map((entry: string) => parseInt(entry));
  }
}