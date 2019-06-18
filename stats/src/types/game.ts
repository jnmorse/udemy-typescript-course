import { MatchResult } from './MatchResult';

export type Game = {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  matchResult: MatchResult;
  ref: string;
};
