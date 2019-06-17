import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  public data: number[];

  constructor(data: number[]) {
    this.data = data
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