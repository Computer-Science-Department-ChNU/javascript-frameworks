// Boolean
let isDone: boolean = false;
// isDone = 1; // Type 'number' is not assignable to type 'boolean'

console.log(isDone);

//  Number
const a1_int: number = 10;
const a2_float: number = 10.1;
const a3_hex: number = 0x000a;
const a4_binary: number = 0b1010;
const a5_octal: number = 0o12;

console.log(a1_int);
console.log(a2_float);
console.log(a3_hex);
console.log(a4_binary);
console.log(a5_octal);

// String
const firstName: string = "Ivan";
const age: number = 25;
const messageTemplate: string = `Hello, my name is ${firstName} I'm ${age} years old.`; // template string
const messageConcat: string = 'Hello, my name is ' + firstName + " I'm " + age + ' years old.'; // concatenation

console.log(messageTemplate);
console.log(messageConcat);

// Symbol
// потрібно додати в tsconfig.json "lib": ["dom", "es2015"]
const mySymbol1: Symbol = Symbol('typescript');
console.log(mySymbol1);

const mySymbol2: Symbol = Symbol('typescript');
console.log(mySymbol2);

console.log(mySymbol1 === mySymbol2);
