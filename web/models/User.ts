import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserOptions {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserOptions> = new Sync<UserOptions>(rootUrl);
  public attributes: Attributes<UserOptions>;

  constructor(attrs?: UserOptions) {
    this.attributes = new Attributes<UserOptions>(attrs);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
