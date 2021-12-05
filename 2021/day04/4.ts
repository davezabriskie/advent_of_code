import { BingoGame } from "./interfaces/bingo-problem.interface";
import { Parser } from "./parser";
import { BingoRunner } from "./bingo-runner";

function partOne(): number {
  const bingoRunner: BingoRunner = new BingoRunner();
  const bingoGame: BingoGame = new Parser().parseInput();
  return bingoRunner.determineWinningScore(bingoGame);
}

function partTwo(): number {
  const bingoRunner: BingoRunner = new BingoRunner();
  const bingoGame: BingoGame = new Parser().parseInput();
  return bingoRunner.determineLastWinningScore(bingoGame);
}

console.log(`Part 1: ${partOne()}`);
console.log(`Part 2: ${partTwo()}`);