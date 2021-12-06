import { DAY_SIX_INPUT, DAY_SIX_TEST_INPUT } from "./input";

function calculatePopulation(startingPopulation: number[], days: number): number {
  const filledPopulation: number[] = buildPopulation(startingPopulation);
  const finalPopulation: number[] = trackPopulationOverDays(filledPopulation, days);
  return finalPopulation.reduce((sum: number, individualPopulation: number) => sum + individualPopulation, 0);
}

function trackPopulationOverDays(population: number[], days: number): number[] {
  const trackedPopulation: number[] = [...population];
  for (let day = 0; day < days; day++) {
    const spawningCount: number = trackedPopulation.shift();
    trackedPopulation.push(spawningCount);
    trackedPopulation[6] = trackedPopulation[6] + spawningCount;
  }
  return trackedPopulation;
}

function buildPopulation(population: number[]): number[] {
  const filledPopulation: number[] = new Array(9).fill(0);
  population.forEach((individual: number) => filledPopulation[individual]++);
  return filledPopulation;
}

function getInput(): number[] {
  return DAY_SIX_INPUT;
}

console.log(`Part 1: ${calculatePopulation(getInput(), 80)}`);
console.log(`Part 2: ${calculatePopulation(getInput(), 256)}`);