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

function printVehicle(vehicle: Vehicle): void {
  console.log(vehicle.summary());
}

printVehicle(oldCivic);
