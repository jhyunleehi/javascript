// 1. user strict
// use thish for valina javascript.
'use strict';

//2. 변수 선언은 언제나 let

let globalName='global Name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(globalName);

//3. constants
// multi thread 환경에서..
// favor immutable data tyepe 

const maxNumber = 10;

for (let i=0; i<3; i++){
    console.log(i);
}

//4. Variable type
//primitive type 쪼갤수 없는 type
//object type: 
//funtion도 first-class funtion 이다.

// js에서는 number type이 끝이다.
// 심지어는 let a=1; let b=1.2;

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

//5. Dynamic typing : dynamically typed languange 
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


//6. object type
const ellie = { name: 'ellie', age: 21};
console.log (`vale: ${ellie.age} ${ellie.name}, type: ${typeof ellie}`);