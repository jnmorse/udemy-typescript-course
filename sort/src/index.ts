import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedListCollection';

const numbers: NumbersCollection = new NumbersCollection([10, 3, -5, 0])
const letters: CharacterCollection = new CharacterCollection('aXbTfopwq')

console.log(numbers.data)
console.log(letters.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()