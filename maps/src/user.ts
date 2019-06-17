import faker from 'faker';
import { Location } from './location';
import { Mapable } from './custom-map';

export class User implements Mapable {
  name: string;
  prefix: string;
  location: Location;

  constructor() {
    this.name = faker.name.firstName(1);
    this.prefix = faker.name.prefix();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public markerContent() {
    return `
      <div>
        <h3>Name: ${this.name}</h3>
        <p>Prefix: ${this.prefix}</p>
      </div>
    `;
  }
}
