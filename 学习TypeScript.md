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

### Interface 接口

- 对对象的形状“shape”进行描述
- 对类class进行抽象
- 鸭子类型判断 "duck typing"

定义方式：

```
interface Person {
  readonly id: number;  // 只读属性,写在属性前
  name: string;
  age?: number;  // 可选属性
}
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

## TS工具

[ts-node](https://github.com/TypeStrong/ts-node): 编译+执行ts文件