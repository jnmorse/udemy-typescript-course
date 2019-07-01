import { Eventing } from './eventing';

export interface UserOptions {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private url: string = 'http://localhost:3000';
  public events: Eventing = new Eventing();

  constructor(private data: UserOptions) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserOptions): void {
    this.data = Object.assign({}, this.data, update);
  }
}
