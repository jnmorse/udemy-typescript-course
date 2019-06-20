import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';

const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader);

matchReader.load();

const summary: Summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
