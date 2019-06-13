let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = i => {
  console.log(i);
};
