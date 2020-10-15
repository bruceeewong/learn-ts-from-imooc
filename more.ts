export {};

// type alias
// fit union type
type PlusType = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: PlusType = sum;

// more complex
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// type assertion
function getLength(input: string | number): number {
  // let number = input as number
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}

// install @types/jquery to access the typing magic
jQuery;
