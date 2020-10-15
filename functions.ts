// func declaration
function add(x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
}

let result1 = add(1, 2);
// let result2 = add(1); // param number mismatch
let result3 = add(1, 2, 3);

// func expression
const add2 = function (x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
};

const add3: (x: number, y: number, z?: number) => number = add2;
