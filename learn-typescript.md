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

