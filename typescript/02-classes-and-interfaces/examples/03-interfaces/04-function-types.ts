// інтерфейс описує сигнатуру функції, функція повинна приймати одне рядкове значення та повертати boolean
interface MyFunc {
    (value: string): boolean;
}

let myFunc1: MyFunc;
// ....
myFunc1 = function (value: string): boolean {
    return false;
};

// імена параметрів не обов'язково повинні збігатися з іменами в інтерфейсі
const myFunc2: MyFunc = function (data: string): boolean {
    return true;
};
