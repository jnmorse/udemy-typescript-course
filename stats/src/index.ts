import fs from 'fs'
import { resolve } from 'path'
import papaparse from 'papaparse'
import { game, CSVResult } from './types';

const matches = fs.readFileSync(resolve(__dirname, '../football.csv'), { encoding: 'utf-8' })

const results: CSVResult[] = papaparse.parse(matches, {
  delimiter: ',',
  skipEmptyLines: true
}).data

const refineData: game[] = results.map((row): game => {
  const [date, homeTeam, awayTeam, homeScore, awayScore, matchResult, vip] = row

  // Split date
  const [day, month, year] = date.split('/')
  // create Date
  const parsedDate = new Date(parseInt(year), parseInt(month), parseInt(day))

  return {
    date: parsedDate,
    homeTeam,
    awayTeam,
    homeScore: parseInt(homeScore),
    awayScore: parseInt(awayScore),
    matchResult,
    vip
  }
})

console.log(refineData)
