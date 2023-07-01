

a = 'aaaa';
b = "BBBB";
console.log(sum(a, b));
c = `c ${a} ${b} `;
console.log(a, b, c);



function sum(a, b) {
    return a + b;
}

heropy = {
    name: 'HEROPY',
    age: 85,
    getNmae: function () {
        return this.name;
    }
};

const hisName = heropy.getNmae();
console.log(hisName)


function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log("==", arg);
    }
    console.log(args, typeof args);

    args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");


object = { key: 'value' };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

console.debug("==============")

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
