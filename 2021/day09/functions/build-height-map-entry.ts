export function buildHeightMapEntry(height: number, row: number, column: number): HeightMapReading {
  return {
    height,
    coordinate: {
      row,
      column
    }
  };
}