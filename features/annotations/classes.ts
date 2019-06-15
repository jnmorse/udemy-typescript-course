class Vehicle {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected drive(message: string = 'chugga chugga'): void {
    console.log(message);
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  public wheels: number;

  constructor(color: string, wheels: number = 4) {
    super(color);

    this.wheels = wheels;
  }

  public startDrivingProcess(): void {
    this.drive('vroom');
    this.honk();
  }
}

const car: Car = new Car('red');
car.startDrivingProcess();
console.log(car.color);
console.log(car.wheels);
