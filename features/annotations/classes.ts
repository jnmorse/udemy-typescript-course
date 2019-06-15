/** Class representing a vehicle */
class Vehicle {
  /**
   * Vehicle color
   * @public
   */
  public color: string;

  /**
   * Number of wheels
   * @public
   */
  public wheels: number = 2;

  /**
   * Contruct a Vehicle
   * @param {string} color color of the car
   */
  constructor(color: string) {
    this.color = color;
  }

  /**
   * logs the sound the vehicle makes
   *
   * this method is protected meaning its only accessable by itself or child
   * classes
   *
   * @param message string to print
   */
  protected drive(message: string = 'chugga chugga'): void {
    console.log(message);
  }

  /**
   * Logs a honk sound
   */
  public honk(): void {
    console.log('beep');
  }
}

/**
 * Class representing a car
 * @extends Vehicle
 */
class Car extends Vehicle {
  public wheels = 4;

  /**
   * Construct the Car Class
   * @param {string} color Color of the car
   * @param {number} wheels How many wheels? (optional)
   */
  constructor(color: string) {
    super(color);
  }

  /**
   * Start the driving process
   */
  public startDrivingProcess(): void {
    this.drive('vroom');
    this.honk();
  }
}

const car: Car = new Car('red');
car.startDrivingProcess();
console.log(car.color);
console.log(car.wheels);
