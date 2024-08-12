// При створенні зміною тип якої не відомий під час
// написання програми можна використовувати
// тип даних any. Такий тип зручно застосовувати в ситуаціях,
// коли значення вводиться користувачем
// виходить у результаті роботи іншої бібліотеки.
// Такий тип даних не проходить перевірку під час компіляції.

let someValue: any = 'Hello world'; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100

// ok
someValue.toFixed();

// Помилка на етапі виконання
// TypeError: someValue.toFixed is not a Function
// someValue = 'test';
// someValue.toFixed();
