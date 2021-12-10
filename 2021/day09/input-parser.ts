export class InputParser {
  
  parseInput(input: string): number[][] {
    return input.split('\n')
      .flatMap((row: string) => [this.parseRow(row)]);
  }
  
  private parseRow(row: string): number[] {
    return row.split('').map((reading: string) => parseInt(reading));
  }
}