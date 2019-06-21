import { MatchResult, MatchData } from './types';
import { dateStringToDate } from './utils';
import { CsvFileReader } from './CsvFileReader';

export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  static fromCSV(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      ([
        date,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        matchResult,
        Ref
      ]: string[]): MatchData => {
        return [
          dateStringToDate(date),
          homeTeam,
          awayTeam,
          parseInt(homeScore),
          parseInt(awayScore),
          matchResult as MatchResult,
          Ref
        ];
      }
    );
  }
}
