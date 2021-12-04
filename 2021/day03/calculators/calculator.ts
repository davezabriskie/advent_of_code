import { DataSummary } from "../data-summary";

export interface Calculator {
  calculateRating(data: DataSummary): number;
}