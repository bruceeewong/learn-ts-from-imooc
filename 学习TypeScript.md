# 学习TypeScript

> 慕课课程：[[Typescript + React 高仿 Antd 从零到一打造自己的组件库](https://coding.imooc.com/class/428.html)](https://coding.imooc.com/learn/list/428.html)
>
> 更新时间：2020/10/15

## 概述

> 任何可以使用 JavaScript 来编写的优秀的大型应用，最终会由TypeScript编写 ——韩骏 2019

TypeScipt: Javascript that scales

- 静态类型风格的类型系统
- 从es6 - es10甚至es-next的语法支持

### 为什么要使用Typescript

程序更易理解：

- 函数或者方法输入输出的参数类型、外部调教

- 动态语言的约束：需要手动调试

效率更高：

- 在不同的代码块和定义跳乎赞
- 自动补全、文档提示

更少的错误

- 编译期间以能发现大部分错误

非常好的包容性

- 完全兼容JavaScript
- 第三方库可以单独编写类型文件
- 支持流行项目

### Typescript使用

全局安装typescript

```
npm install typescript -g
```

查看版本

```
tsc --version
```

编译单个文件

```
tsc hello.ts
```

## 数据类型

### 原始类型 primitive types

- number

- boolean

- string

- undefined

- null

### 任意类型 any

任意类型赋值

失去代码提示

### 联合类型

通过 | 声明多个类型， 如 `number | string`

### Object类型

#### Array

```
type[]  // 类型 + 数组
```

有预定的接口

- arguments 

- htmlCollection

#### 元组 Tuple

限定数据类型和个数的数组

```
let user: [string, number] = ["viking", 1];
```

### function 函数

#### 函数声明

```
function add(x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
}
```

#### 函数表达式

```
const add2 = function (x: number, y: number, z?: number): number {
  return z ? x + y + z : x + y;
};
```

```
const add3: (x: number, y: number, z?: number) => number = add2;
```

#### 隐式类型推断

在没有明确指定类型时，typescript编译器自动完成

### 类Class

类（Class）：定义了一切事物的抽象特点

对象(Object)：类的实例

面向对象(OOP)三大特性：封装、继承、多态

#### 修饰符

- `public`：外部都可以访问

- `private`：只能在定义的类中访问

- `protected`：不允许外部访问，允许子类访问
- `readonly`：只读不允许修改

#### 静态属性、静态方法

关键字：`static`

与实例无关的可以定义为静态属性

### Interface 接口

- 对对象的形状“shape”进行描述
- 对类class进行抽象
- 鸭子类型判断 "duck typing":

定义Object字段：

```
interface Person {
  readonly id: number;  // 只读属性,写在属性前
  name: string;
  age?: number;  // 可选属性
}
```

接口抽象类的属性、方法：

```
interface Radio {
  switchRadio(trigger: boolean): void;
}
class Car implements Radio {
  switchRadio() {}
}
class Cellphone implements Radio {
  switchRadio() {}
}
```

多继承接口

```
interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): string;
}
class Cellphone implements Radio, Battery {
  checkBatteryStatus(){}
  switchRadio() {}
}
```

接口间继承

```
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): string;
}
```

### Enum 枚举

```
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
console.log(Direction[0]); // 双向映射
```

数字枚举

```
enum DirectionNum {
  Up = 10,
  Down = 11,
  Left = 12,
  Right = 13,
}
```

字符串枚举

```
enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

常量枚举，无双向映射，内联进所有引用

```
const enum ConstDirectoin {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

### Generics 泛型 

>  动机: 想要定义多类型的输入输出相同的函数，如echo
>
> ```
> function echo(arg: any): any {}
> ```
>
> 输入和返回没有约束为同一种类型，这里需要用泛型

使用时才指定类型：

```
function echo<T>(arg: T): T {
  return arg;
}
```

多泛型定义：

```
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
```

泛型数组定义

```
// generics array
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

result = echoWithArr([1, 2, 3]);
```

通过接口约束泛型：鸭子类型

```
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
```

类和接口

通过泛型，从调用处指定类型

```
/ generics define class
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
```

接口使用泛型

```
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 100 };
```

用泛型描述数组

```
let arrTwo: Array<number> = [1, 2, 3];
```

用泛型接口描述函数

```
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
```

## TS工具

[ts-node](https://github.com/TypeStrong/ts-node): 编译+执行ts文件