// Кортеж – упорядкований набір фіксованої довжини.
// string[] Масив | [string, string] Кортеж

let x: [string, number]; // визначення кортежу
x = ['Hello', 10]; // ініціалізація кортежу

console.log(x); // (2) ["Hello", 10]
console.log(x[0]); // Hello
console.log(x[1]); // 10

const y: [number, string, string] = [1, 'hello', 'world']; // кортеж на три значення.
console.log(y[2]);

// y[0].toLowerCase(); // Property 'toLowerCase' does not exist on type 'number'.
