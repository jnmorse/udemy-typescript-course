import { Analyzer } from '../Summary';
import { MatchData, MatchResult } from '../types';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let howMany = 0;

    for (const match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        howMany += 1;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        howMany += 1;
      }
    }

    return `Team ${this.team} won ${howMany} games`;
  }
}
