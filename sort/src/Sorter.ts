export interface Sortable {
  swap(leftIndex: number, rightIndex: number): void,
  compare(leftIndex: number, rightIndex: number): boolean,
  length: number,
  data: any
}

export class Sorter {
  constructor(public collection: Sortable) {
    this.collection = collection
  }

  public get results(): any {
    return this.collection.data
  }

  public sort(): void {
    const { length } = this.collection

    for (let i: number = 0; i < length; i += 1) {
      for (let j: number = 0; j < length - i - 1; j += 1) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}

