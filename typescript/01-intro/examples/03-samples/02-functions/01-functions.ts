// Function Declaration - функція, оголошена в основному потоці коду.
// Function Expression - оголошення функції в контексті будь-якого виразу, наприклад присвоювання.

// Function Declaration
function sum1(a: number, b: number) {
    return a + b;
}

// Function Expression
const sum2 = function (a: number, b: number) {
    return a + b;
}

// Обидва ці оголошення кажуть інтерпретатору:
// «оголоси змінну sum1, створи функцію із зазначеними параметрами та кодом і збережи її в sum».
// Основна відмінність між ними: функції, оголошені як Function Declaration, створюються інтерпретатором до виконання коду.

sayHi("Дмитро"); // Привіт, Дмитро

function sayHi(name: string) {
    console.log("Привіт, " + name);
}

// А якби це було оголошення Function Expression, то такий виклик би не спрацював:

sayHi2("Дмитро"); // помилка!

const sayHi2 = function (name) {
    console.log("Привіт, " + name);
}

// Висновок:
// На відміну від оголошень Function Declaration,
// які створюються заздалегідь, до виконання коду,
// оголошення Function Expression створюють функцію,
// коли до них доходить виконання.
// Завдяки цій властивості Function Expression можна (і навіть потрібно)
// використовувати для умовного оголошення функції.

// звичайна функція
function add1(x, y) {
    return x + y;
}

const result1 = add1({}, 2); // any, any, any.... :(
console.log(result1);

// Типізована функція. Приймає два аргументи типу number та повертає значення типу number
function add2(x: number, y: number): number {
    return x + y;
    // return "hello world"
}

const result2: number = add2(10, 20); // параметри
// const result2: number = add2(10); // очікується два параметри
// const result2: number = add2(10, "text"); // другий аргумент має бути числовим
// const result2: string = add2(10, 20); // результат роботи функції не може бути наданий рядковою змінною
console.log(result2);
