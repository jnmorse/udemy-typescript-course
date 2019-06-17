import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
    this.data = data
    this.sort()
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftNum = this.data[leftIndex]
    const rightNum = this.data[rightIndex]

    this.data[leftIndex] = rightNum
    this.data[rightIndex] = leftNum
  }

  public get length(): number {
    return this.data.length
  }
}