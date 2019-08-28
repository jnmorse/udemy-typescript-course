import { User } from './models/User';

const user: User = new User({ name: 'Joseph', age: 38 });

console.log(user.get('name'));
