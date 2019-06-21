export interface UserOptions {
  name: string;
  age: number;
}
export class User {
  constructor(private data: UserOptions) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
}
