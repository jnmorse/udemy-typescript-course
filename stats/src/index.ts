import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader: MatchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

const summary: Summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
