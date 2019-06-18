/**
 * Preserved for reference
 */
import fs from 'fs';

export abstract class CsvFileReader<T> {
  public data: T[] = [];

  constructor(private filename: string) {}

  abstract mapRow(row: string[]): T;

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(row => this.mapRow(row));
  }
}
