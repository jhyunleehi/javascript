import _ from 'lodash'

console.log(_.upperCase('hello world'))

const boxEl = document.querySelector('.box')
boxEl.addEventListener('click', function(){
    console.log('Click~!');
    boxEl.textContent='HEROPY?!';
})

boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains)
console.debug(boxEl)


interface User {
    name: String
    age: number
}

const user:User={
    name:'Heropy',
    age:85
}

console.log(user)