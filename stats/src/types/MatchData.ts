import { MatchResult } from './MatchResult';

export type HomeScore = number;
export type AwayScore = number;
export type Ref = string;

export type MatchData = [
  Date,
  string,
  string,
  HomeScore,
  AwayScore,
  MatchResult,
  Ref
];
