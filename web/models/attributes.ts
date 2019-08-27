export class Attributes<Props> {
  constructor(private data: Props) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: Props): void {
    this.data = Object.assign({}, this.data, update);
  }
}

type BestName = 'Joseph';

const printName = (name: BestName): void => {};

printName('fred');
