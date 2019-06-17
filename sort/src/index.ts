import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

const sorter: Sorter = new Sorter(new NumbersCollection([10, 3, -5, 0]))
const letterSort: Sorter = new Sorter(new CharacterCollection('aXbTfopwq'))

letterSort.sort()
sorter.sort()

console.log(sorter.collection.data)
console.log(letterSort.collection.data)