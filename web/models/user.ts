export interface UserOptions {
  name: string;
  age: number;
}
export class User {
  constructor(private data: UserOptions) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserOptions): void {
    this.data = Object.assign({}, this.data, update);
  }
}
