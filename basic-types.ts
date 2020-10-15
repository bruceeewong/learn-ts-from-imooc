// primitive types
let isDone: boolean = false;

let age: number = 20;
let binaryNumber: number = 0b1111;

let firstName: string = "boo";
let message: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

let num: number = undefined;

let notSure: any = 4;
notSure = "a string";
notSure = true;
notSure.myName = "aaa";
notSure.getName();

let numOrStr: number | string = 234;
numOrStr = "a";

let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(1);
// arrOfNumbers.push("a");  // error

function test() {
  console.log(arguments); // array like - not suit for array type
}

let user: [string, number] = ["viking", 1];
