let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Classes

class Person {}

let joseph: Person = new Person();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = i => {
  console.log(i);
};

// when to use annotations
// 1) Function that returns the 'any' type
interface coords {
  x: number;
  y: number;
}

const json = '{"x": 10, "y":20}';
const coordinates: coords = JSON.parse(json);
console.log(coordinates); //?

// 2) when we declare a variabel on one line and initialize it later
let words = ['red', 'green', 'blue'];
let fountWord: boolean;

for (let i: number = 0; i < words.length; i += 1) {
  if (words[i] === 'green') {
    fountWord = true;
  }
}

// 3) Variable whose type connot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i: number = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
