interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let boo: Person = {
  id: 1,
  name: "boo",
};

// boo.id = 222;  // error, readonly is not allowed to change
