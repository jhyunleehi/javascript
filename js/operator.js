'use strict';

//1. string concatennation
console.log('my' + ' cat');
console.log('1' + 2); //형변환 to string
console.log(0 + '1' + 2); //형변환 to string
console.log(`string literals : 1 + 2 = ${1 + 2}`);

//2. numeric operators

//3. Incremet and Decremetn operatiors

//4. Assignment operators 

//5. Comparison operators

//6. Logical operators

//7. Equlity
//== loose equality, with type coverstion

//=== stric equality , no type coversion

//8. condtioanl operators : if, if else if, else

//9. Tenary operator 

//10. switch 
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love it');
        break;
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!!');
        break;
}

//11.loop

let i =2;
while (i>0){
    console.log(`out: ${i}`);
    i--;
}

//nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`value: ${i}, value: ${j}`);
    }
}