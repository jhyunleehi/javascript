#### replit.com
[https://replit.com/~](https://replit.com/~)

#### codepen
[https://codepen.io/](https://codepen.io/)

#### vscode.dev
[https://vscode.dev/](https://vscode.dev/)
#### w3 school : react 
[https://www.w3schools.com/react/default.asp](https://www.w3schools.com/react/default.asp)
[https://www.w3schools.com/js/js_validation_api.asp](https://www.w3schools.com/js/js_validation_api.asp)

#### react 강의 
[https://ljh86029926.gitbook.io/coding-apple-react/](https://ljh86029926.gitbook.io/coding-apple-react/)

#### javascript
[https://ko.javascript.info/](https://ko.javascript.info/)

#### react dashboard 
[https://www.youtube.com/watch?v=jx5hdo50a2M](https://www.youtube.com/watch?v=jx5hdo50a2M)

#### react tic tac toe
[https://react.dev/learn/tutorial-tic-tac-toe](https://react.dev/learn/tutorial-tic-tac-toe)

#### javascript
[https://opentutorials.org/course/743](https://opentutorials.org/course/743)

#### var let const 차이점
[https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/](https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/)

#### 생활코딩
[https://opentutorials.org/course/1](https://opentutorials.org/course/1)


#### cytoscape
[https://cytoscape.org/](https://cytoscape.org/)

[JS-Google-Chart-API](https://velog.io/@geesuee/JS-Google-Chart-API-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)

[https://almende.github.io/vis/index.html#](https://almende.github.io/vis/index.html#)
[https://d3js.org/](https://d3js.org/)
[https://dev.to/theme_selection/10-javascript-chart-library-you-must-use-k20](https://dev.to/theme_selection/10-javascript-chart-library-you-must-use-k20)
# react 



<<<<<<< HEAD
```
$ npm init react-app my-app3
$ npm install react-router-dom@6
=======
## data type

### 1. user strict

- use thish for valina javascript.

```js
"use strict";
>>>>>>> main
```
## 시행착오
####  npx create-react-app 오류
* 현상
```sh
$ npx create-react-app ./
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\jhyun\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\jhyun\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\jhyun\AppData\Local\npm-cache\_logs\2023-07-29T00_35_44_843Z-debug-0.log
```
<<<<<<< HEAD
* 조치
```sh
$ npm install npm -g
=======
#### 자바스크립트에서 var를 사용하면 안되는 이유

자바스크립트에서 var를 사용하지 않는 것이 권장되는 이유는 여러 가지가 있습니다. 여기에는 다음과 같은 이유들이 포함됩니다:

1. 함수 스코프: var로 선언된 변수는 함수 스코프를 가집니다. 이는 변수가 선언된 함수 내에서만 유효하고 함수 외부에서는 접근할 수 없다는 것을 의미합니다. 이는 예상치 못한 변수 덮어쓰기나 값의 누출로 이어질 수 있습니다.

2. 호이스팅: var로 선언된 변수는 호이스팅(hoisting)됩니다. 즉, 변수가 선언되기 전에도 해당 변수에 접근할 수 있습니다. 이는 코드의 가독성을 해치고 예상치 못한 동작을 유발할 수 있습니다.

3. 재할당: var로 선언된 변수는 재할당이 자유롭게 가능합니다. 이는 의도치 않은 값의 변경이 발생할 수 있음을 의미합니다.

4. 블록 스코프 부족: var는 블록 스코프를 제공하지 않습니다. ES6에서 도입된 let 및 const는 블록 스코프를 가지므로 블록 내에서 변수의 유효 범위를 제한할 수 있습니다.

5. 변수 덮어쓰기의 위험: var로 선언된 변수는 같은 이름의 변수를 다시 선언할 수 있습니다. 이는 변수를 의도치 않게 덮어쓸 수 있는 위험을 내포합니다.

6. 따라서 코드의 가독성, 예측 가능성 및 유지 관리 용이성을 위해 var보다는 let이나 const를 사용하는 것이 권장됩니다. 


>>>>>>> main

added 1 package in 5s

28 packages are looking for funding
  run `npm fund` for details
```
<<<<<<< HEAD
=======

### 4. Variable type

- primitive type 쪼갤수 없는 type
- object type:
- funtion도 first-class funtion 이다.
- js에서는 number type이 끝이다.
- 심지어는 let a=1; let b=1.2;

```js
const count = 17;
const size = 17.1;
console.log(`valeu: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type ${typeof size}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`vale: ${brendan}, type: ${typeof brendan}`);

//boolean

//null
let nothing = null;
console.log(`value: ${nothing}, type ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type ${typeof x}`);

//symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsym1 = Symbol.for("id");
const gsym2 = Symbol.for("id");
console.log(gsym1 === gsym2);
```

### 5. Dynamic typing : dynamically typed languange

```js
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; //숫자 형으로 동적 형변환
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // 문자로 동적 형변환
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // 숫자로 동적 형변환
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // 이러면 에러 발생
```

### 6. object type

```js
const ellie = { name: "ellie", age: 21 };
console.log(`vale: ${ellie.age} ${ellie.name}, type: ${typeof ellie}`);
```

---

## variable

### 1. Use strict

// added in ES 5
// use this for Vanila Javascript.

```js
"use strict";
```

### 2. Variable, rw(read/write)




```js
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);
```

### 3. Constant, r(read only)

- use const whenever possible.
- only use let if variable needs to change.

```js
const daysInWeek = 7;
const maxNumber = 5;
```

Note!

- Immutable data types: premitive types, frozen objects (i.e. object.freeze())
- Mutable data types: all objects by default are mutable in JS
- favor immutable data type always for a few reasons:
  - security
  - thread safety
  - reduce human mistakes

### 4. Variable types

- primitive, single item: number, string, boolean, null, undefined, symbol
- object, box container
- function, first-class function

```js
// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
```

### 5. Dynamic typing: dynamically typed language

```js
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
```

---.

## Function

- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

### 1. Function declaration

- function name(param1, param2) { body... return; }
- one function === one thing
- naming: doSomething, command, verb
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS

```JS
function printHello() {
    console.log('Hello');
  }
  printHello();

  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
```

### 2. Parameters

- primitive parameters: passed by value
- object parameters: passed by reference

```JS
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
```

### 3. Default parameters (added in ES6)

```JS
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
```

### 4. Rest parameters (added in ES6)

```js
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");
```

### 5. Local scope

```js
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error
}
printMessage();
```

### 6. Return a value

```js
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
```

### 7. Early return, early exit

```js
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
```

### 8. js에서 화살표 함수를 사용하는 이유

자바스크립트에서 화살표 함수(arrow functions)를 사용하는 이유는 다음과 같습니다:

1. 간결성: 화살표 함수는 함수를 더 간결하게 작성할 수 있습니다. 함수 표현식을 더 짧고 명료하게 표현할 수 있어 코드의 가독성을 향상시킵니다.

2. 명시적인 this: 일반 함수의 경우, 함수가 호출될 때마다 this가 변경됩니다. 그러나 화살표 함수는 자신의 this를 가지지 않고, 외부 스코프의 this를 가져다 사용합니다. 이는 코드에서 this의 동작을 더 명시적으로 제어할 수 있게 합니다.

3. 중첩된 함수에서의 사용 용이성: 화살표 함수는 중첩된 함수 내부에서 외부 함수의 this를 잃어버리지 않도록 보장합니다. 이는 콜백 함수나 이벤트 핸들러와 같은 상황에서 유용합니다.

4. 클로저: 화살표 함수는 자동으로 클로저(closure)를 형성합니다. 이는 외부 스코프의 변수에 접근할 수 있게 합니다.

5. 메소드로의 사용 용이성: 화살표 함수는 객체의 메소드로 사용할 때 특히 유용합니다. 일반 함수의 경우, 메소드 내부에서 this가 메소드를 호출한 객체를 가리키지 않을 수 있지만, 화살표 함수를 사용하면 명시적으로 this를 설정할 필요가 없습니다.

6. 함수 바인딩을 피함: 화살표 함수는 자신의 this, arguments, super, new.target을 바인딩하지 않습니다. 이는 함수 바인딩에 대한 오버헤드를 줄이고 성능을 향상시킵니다.




## First-class function

- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions.
- can be returned by another function

### 1. Function expression

- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.

```js
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
```

### 2. Callback function using function expression

```js
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
```

### 3. Fun quiz time❤️

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

```js
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 2, 3));
```

---

## class

`'use strict';`

- Object-oriendted programming
- class: template
- object: instance of a class
- JavaScript classes
  - introduced in ES6
  - syntactical sugar over prototype-based inheritance

### 1. Class declarations

```js
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
```

### 2. Getter and setters

```js
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);
```

### 3. Fields (public, private)

```js
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```

### 4. Static properties and methods

```js
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
```

### 5. Inheritance

```js
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
```

## Object

```js
"use strict";
```

### 1. Objects

- one of the JavaScript's data types.
- a collection of related data and/or functionality.
- Nearly all objects in JavaScript are instances of Object

```js
object = { key: value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);
```

### 2. Computed properties

```js
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");
```

### 3. Property value shorthand

```js
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("elile", 30);
console.log(person4);
```

### 4. Constructor Function

```js
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

### 5. in operator: property existence check (key in obj)

```js
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);
```

### 6. for..in vs for..of

```js
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}
```

### 7. Fun cloning

```js
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
```

## Array 🎉

### 1. Declaration

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

### 2. Index position

```js
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();
```

### 3. Looping over an array

```js
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

console.clear();

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
```

### 4. Addtion, deletion, copy

```js
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
```

### 5. Searching

```js
// indexOf: find the index
//console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥"));

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));

// lastIndexOf
//console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🥥"));
```

## array api

### Q1. make a string out of an array

```js
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}
```

### Q2. make an array out of a string

```js
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  console.log(result);
}
```

### Q3. make this array look like this: [5, 4, 3, 2, 1]

```js
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}
```

### Q4. make new array without the first two elements

```js
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}
```

### Q5. find a student with the score 90

```js
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
```

### Q6. make an array of enrolled students

```js
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
```

### Q7. make an array containing only the students' scores

```js
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}
```

### Q8. check if there is a student with the score lower than 50

```js
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}
console.clear();
```

### Q9. compute students' average score

```js
{
  const result = students.reduce((prev, curr) => prev.score + curr.score);
  console.log(result / students.length);
}
```

### Q10. make a string containing all the scores

```js
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
```

## JSON : JavaScript Object Notation

`'use strict';`

- JavaScript Object Notation

### 1. Object to JSON

```js
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);
```

### 2. JSON to Object

```js
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
```

## Callback

```js
"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

## Promise

`'use strict';`

- Promise is a JavaScript object for asynchronous operation.
- State: pending -> fulfilled or rejected
- Producer vs Consumer

### 1. Producer

```js
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error('no network'));
  }, 2000);
});
```

### 2. Consumers: then, catch, finally

```js
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
```

### 3. Promise chaining

```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
```

### 4. Error Handling

```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
```

## async & await

- clear style of using promise :)

### 1. async

```js
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);
```

### 2. await ✨

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

### 3. useful APIs ✨

```js
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
```

* react 기존 앱에서 보수 및 확장이 필요하거나 빠르게 크로스플랫폼 앱개발까지 필요할 때 - React
* vue 
가벼운 서비스를 개발할 때, 개발에 관해 잘 모르는 상태에서 빠르게 성과를 내야할 때 - Vue
* angular 
규모가 큰 기업에서, 많은 기능을 구현해야 하고 확장성이 높은 어플리케이션을 개발할 때 - Angular





## vscode 

#### vs code config  npm debug
1. npm start
2. F5 bubug start 
3. chrom 브라우져에서 url를 정확하게 입력: http://localhost:5501/D3js/t1/index.html
4. chrom 브라우져에서 console 확인 

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [              
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
>>>>>>> main
