class Animal {
  protected name: string;
  static categories: string[] = ["mammal", "bird"];
  constructor(name: string) {
    this.name = name;
  }

  static isAnimal(arg) {
    return arg instanceof Animal;
  }

  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal("lily");
console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const huan = new Dog("huanhuan");
console.log(huan.bark());

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `Meow, ${super.run()}`;
  }
}

const lin = new Cat("lin");
console.log(lin.run());

console.log(Animal.isAnimal(lin));
