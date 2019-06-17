export abstract class Sorter {
  abstract get length(): number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  public sort(): void {
    const { length } = this

    for (let i: number = 0; i < length; i += 1) {
      for (let j: number = 0; j < length - i - 1; j += 1) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}

