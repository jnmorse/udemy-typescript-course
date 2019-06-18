import { MatchReader } from './inheritance/MatchReader';
import { MatchData } from './types';

const parse = new MatchReader('football.csv');
parse.read();

const results: MatchData[] = parse.data;
console.log(results);
