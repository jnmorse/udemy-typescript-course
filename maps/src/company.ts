import faker from 'faker';

import { Location } from './location';
import { Mapable } from './custom-map';

export class Company implements Mapable {
  name: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public markerContent() {
    return `
      <div>
        <h3>Company Name: ${this.name}</h3>
        <p>Catchphrase: ${this.catchPhrase}</p>
      </div>
    `;
  }
}
