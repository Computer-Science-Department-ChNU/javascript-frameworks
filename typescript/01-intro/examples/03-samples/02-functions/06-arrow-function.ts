// arrow function - спеціальний синтаксис визначення функцій

// у змінному increment знаходиться функція, яка приймає 
// один параметр і повертає його значення збільшене на 1.

const increment = function (x: number) {
    return x + 1;
}

const incrementArrow1 = (x: number) => {
    return x + 1;
}

const incrementArrow2 = (x: number) => x + 1;

const incrementArrow3 = x => x + 1;


// приклад використання стрілкових функцій як функції зворотнього виклику
const myFunc = (callback: (x: number) => number): void => {
    callback(10);
}

myFunc(x => x + 1)
//myFunc(x => 'String') - error