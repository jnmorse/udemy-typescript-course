import axios, { AxiosResponse } from 'axios';

export class Sync {
  fetch(): void {
    axios
      .get(`${this.url}/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${this.url}/users/${id}`, this.data);
    } else {
      axios.post(`${this.url}/users`, this.data);
    }
  }
}
