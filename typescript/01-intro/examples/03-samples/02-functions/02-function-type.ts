// під час створення змінної можна вказати
// тип даних який визначає сигнатуру функції.
// параметри => тип, що повертається

// приймає два параметри типу number повертає значення number
let myAdd: (x: number, y: number) => number; // це означає, що у змінну myAdd я можу присвоїти лише функцію яка задовільняє наступній типізації
// це називається сигнатура функції


// змінною може бути присвоєно функцію, яка нічого не
// приймає і не повертає значень
let myProc: () => void;

function myAddDeclaration(x: number, y: number): number {
    return x + y;
}

myAdd = myAddDeclaration; // в змінну myAdd записуємо функцію myAddDeclaration
console.log(myAdd(10, 20)); // виклик функції

myProc = function (): void {
    console.log('Hello world');
};
myProc(); // виклик функції
