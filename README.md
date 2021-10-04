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