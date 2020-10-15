// can not restrict the type of input and output to be the exact same
// function echo(arg: any): any {
//   return arg;
// }
export {};

// use generics
function echo<T>(arg: T): T {
  return arg;
}

const str: string = "a";
let result: any = echo(str);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// generics array
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

result = echoWithArr([1, 2, 3]);

// generics with restriction
// duck typing: allow type with length
interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

result = echoWithLength("123");
result = echoWithLength([1, 2, 3]);
result = echoWithLength({ length: 10 });

// generics define class
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push("a");  // type error

const queue2 = new Queue<string>();
queue2.push("a");
// queue2.push(1)  // type error

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 100 };

let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3]; // use generics to describe typed array

// use generics to describe func
interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
const a: IPlus<number> = plus;

function connect(a: string, b: string): string {
  return a + b;
}

const b: IPlus<string> = connect;
