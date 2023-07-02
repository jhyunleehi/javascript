# javascript

## data type
### 1. user strict
* use thish for valina javascript.
```js
'use strict';
```
### 2. 변수 선언은 언제나 let
```js
'use strict';
let globalName='global Name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);
```

### 3. constants
* multi thread 환경에서..
* favor immutable data tyepe 
```js
const maxNumber = 10;

for (let i=0; i<3; i++){
    console.log(i);
}
```

### 4. Variable type
- primitive type 쪼갤수 없는 type
- object type: 
- funtion도 first-class funtion 이다.
-  js에서는 number type이 끝이다.
-  심지어는 let a=1; let b=1.2;

```js
const count=17;
const size = 17.1;
console.log(`valeu: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type ${typeof size}`);

// string
const char ='c';
const brendan ='brendan';
const greeting = 'hello'+ brendan;
console.log(`vale: ${brendan}, type: ${typeof brendan}`);

//boolean

//null
let nothing  =null;
console.log (`value: ${nothing}, type ${typeof nothing}`);

//undefined
let x;
console.log (`value: ${x}, type ${typeof x}`);

//symbol
const symbol1 =  Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);

const gsym1 = Symbol.for('id');
const gsym2 = Symbol.for('id');
console.log(gsym1===gsym2);
```

### 5. Dynamic typing : dynamically typed languange 
```js
let text='hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text =1;       //숫자 형으로 동적 형변환 
console.log(`value: ${text}, type: ${typeof text}`);
text ='7'+5;   // 문자로 동적 형변환 
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';  // 숫자로 동적 형변환
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // 이러면 에러 발생
```

### 6. object type
```js
const ellie = { name: 'ellie', age: 21};
console.log (`vale: ${ellie.age} ${ellie.name}, type: ${typeof ellie}`);
```

---
## variable
### 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
```js
'use strict';
```

### 2. Variable, rw(read/write)
```js
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
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
* use const whenever possible.
* only use let if variable needs to change.
```js
const daysInWeek = 7;
const maxNumber = 5;
```
 Note!
* Immutable data types: premitive types, frozen objects (i.e. object.freeze())
* Mutable data types: all objects by default are mutable in JS
* favor immutable data type always for a few reasons:
  - security
  - thread safety
  - reduce human mistakes

### 4. Variable types
* primitive, single item: number, string, boolean, null, undefined, symbol
* object, box container
* function, first-class function
```js
// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

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
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
```
### 5. Dynamic typing: dynamically typed language
```js
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
```
---
## Function
 - fundamental building block in the program
 - subprogram can be used multiple times
 - performs a task or calculates a value

### 1. Function declaration
* function name(param1, param2) { body... return; }
* one function === one thing
* naming: doSomething, command, verb
* e.g. createCardAndPoint -> createCard, createPoint
* function is object in JS
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
  printAll('dream', 'coding', 'ellie');
  ```


  ### 5. Local scope
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
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

  ## First-class function
  * functions are treated like any other variable
  * can be assigned as a value to variable
  * can be passed as an argument to other functions.
  * can be returned by another function
  
  ### 1. Function expression
  * a function declaration can be called earlier than it is defined. (hoisted)
  * a function expression is created when the execution reaches it.
  ```js
  const print = function () {    // anonymous function
    console.log('print');
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
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }

  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function
  // always anonymous
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE');
  })();
  
  ```
  ### 3. Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  ```js
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));
  ```
  ---
## class
  `'use strict';`
* Object-oriendted programming
* class: template
* object: instance of a class
* JavaScript classes
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

const ellie = new Person('ellie', 20);
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

const user1 = new User('Steve', 'Job', -1);
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
  static publisher = 'Dream Coding';
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
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
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
'use strict';
```
### 1. Objects
* one of the JavaScript's data types.
* a collection of related data and/or functionality.
* Nearly all objects in JavaScript are instances of Object
```js
object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
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
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');
```
### 3. Property value shorthand
```js
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
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
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
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
const user = { name: 'ellie', age: '20' };
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
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
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
const fruits = ['🍎', '🍌'];
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
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
```
### 5. Searching
```js
// indexOf: find the index
//console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
//console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));
```

## array api

### Q1. make a string out of an array
```js
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}
```  
### Q2. make an array out of a string
```js  
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
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
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
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

* JavaScript Object Notation
###  1. Object to JSON
```js
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
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
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
```

## Callback

```js
'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
```
## Promise

`'use strict';`

* Promise is a JavaScript object for asynchronous operation.
* State: pending -> fulfilled or rejected
* Producer vs Consumer

### 1. Producer
```js
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});
```

### 2. Consumers: then, catch, finally
```js
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
```
### 3. Promise chaining
```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));
  ```

### 4. Error Handling
```js
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
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
* clear style of using promise :)

### 1. async
```js
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  ```
  ### 2. await ✨
  ```js
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
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
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);
  ```