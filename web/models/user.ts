import { Eventing } from './eventing';
import { Sync } from './sync';

export interface UserOptions {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserOptions> = new Sync<UserOptions>(rootUrl);
}
