// can not restrict the type of input and output to be the exact same
// function echo(arg: any): any {
//   return arg;
// }

// use generics
function echo<T>(arg: T): T {
  return arg;
}

const str: string = "a";
const result = echo(str);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
