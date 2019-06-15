interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,

  summary() {
    return `Name: ${this.name}`;
  }
};

function printSummary(report: Reportable): void {
  console.log(report.summary());
}

printSummary(oldCivic);
