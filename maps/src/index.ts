import { User } from './user';
import { Company } from './company';
import { CustomMap } from './custom-map';

const user = new User();
const company = new Company();

const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
