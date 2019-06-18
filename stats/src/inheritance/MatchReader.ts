/**
 * preserved for reference
 */
import { CsvFileReader } from './CsvFileReader';
import { MatchData, MatchResult } from '../types';
import { dateStringToDate } from '../utils';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow([
    date,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    matchResult,
    Ref
  ]: string[]): MatchData {
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
}
