class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<CollectionType> {
  constructor(public collection: CollectionType[]) { }

  get(index: number): CollectionType {
    return this.collection[index]
  }
}

const test = new ArrayOfAnything([2, 6, 7])

test.get(3)