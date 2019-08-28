import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<Data extends HasId> {
  public rootUrl: URL;

  constructor(rootUrl: string) {
    this.rootUrl = new URL(rootUrl);
  }

  public fetch<Response>(id: number): AxiosPromise<Response> {
    return axios.get(`${this.rootUrl.href}/${id}`);
  }

  public save<Response>(data: Data): AxiosPromise<Response> {
    if (data.id) {
      return axios.put<Response>(`${this.rootUrl.href}/${data.id}`, data);
    }

    return axios.post(this.rootUrl.href, data);
  }
}
