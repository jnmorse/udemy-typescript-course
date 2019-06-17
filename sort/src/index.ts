class Sorter {
  collection: number[]

  constructor(collection: number[]) {
    this.collection = collection
  }

  sort(): void {
    const { length }: { length: number } = this.collection

    for (let i: number = 0; i < length; i += 1) {
      for (let j: number = 0; j < length - i - 1; j += 1) {
        if (this.collection[j] > this.collection[j + 1]) {
          const lefthand = this.collection[j]
          this.collection[j] = this.collection[j + 1]
          this.collection[j + 1] = lefthand
        }
      }
    }
  }
}

const sorter: Sorter = new Sorter([10, 3, -5, 0])

sorter.sort()
console.log(sorter.collection)