// Тип даних void - тип даних що вказує на відсутність 
// будь-якого значення.
// Використовується для того, щоб при визначенні функція 
// явно вказати на відсутність значення, що повертається.
function myProcedure(): void {
    alert('hello');
}

// тип void можна використовуватиме визначення змінних, 
// але такій змінній можна присвоїти лише значення undefined чи null
let someVoidValue: void = undefined;
someVoidValue = null;

const u: undefined = undefined; // змінна типу undefined
const n: null = null; // змінна типу  null

// за замовчанням значення null і undefined можуть 
// бути присвоєні будь якому іншому типу даних
let testNumber: number = undefined;
