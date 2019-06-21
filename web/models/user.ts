export interface UserOptions {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserOptions) { }

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserOptions): void {
    this.data = Object.assign({}, this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }
}