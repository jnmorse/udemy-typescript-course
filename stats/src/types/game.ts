import { MatchResult } from './MatchResult';

export type game = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchResult: MatchResult;
  vip: string;
}

