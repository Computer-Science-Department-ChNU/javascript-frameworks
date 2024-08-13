// необхідно вказувати тип даних, з яких складається масив
// масив рядкових значень
let year: string[];
// let year: (string | number | boolean)[];
year = ['January', 'February', 'March', '...'];

// Type 'number' is not assignable to type 'string'.
// year = [1, 'January', 'February', 'March', '...'];

console.log(year);

const list: number[] = [1, 2, 3]; // визначення числового масиву та його ініціалізація
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// створення масиву використовуючи generic тип даних Array
// У TypeScript, generic (узагальнений тип) — це спосіб створення компонентів
// (класів, функцій, інтерфейсів), які можуть працювати з різними типами даних,
// при цьому зберігаючи типову безпеку.
// Це дозволяє створювати більш гнучкий і повторно використовуваний код.
const values: Array<number> = [-1, -2, -3];
//const values: Array<number | string> = [-1, -2, -3];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// вкладені масиви
// const nested: number[][] = [[1], [2], [3]];
const nested: Array<Array<number>> = [[1], [2], [3]];
for (let i = 0; i < nested.length; i++) {
    console.log(nested[i]);
}
