enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
console.log(Direction[0]); // reverse mapping

enum DirectionNum {
  Up = 10,
  Down = 11,
  Left = 12,
  Right = 13,
}

enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// constance enum
// inline all references
const enum ConstDirectoin {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
