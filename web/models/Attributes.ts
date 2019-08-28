export class Attributes<Props> {
  constructor(private data: Props) {}

  get = <K extends keyof Props>(key: K): Props[K] => {
    return this.data[key];
  };

  set = (update: Props): void => {
    this.data = Object.assign(this.data, update);
  };
}
