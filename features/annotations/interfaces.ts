interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: 2000,
  broken: true,

  summary() {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

function printSummary(report: Reportable): void {
  console.log(report.summary());
}

printSummary(oldCivic);
printSummary(drink);
