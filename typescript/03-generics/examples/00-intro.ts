// прості типи можна порівняти з монолітами

// цей верстат призначений для друку газет під номером A
interface A {
    field: number;
}

// цей верстат призначений для друку газет під номером B
interface B {
    field: string;
}

// і т.д.


/* [0] [1] [2] */
interface Type<T0, T1> {
}

/*
 * [0] оголошення узагальненого типу Type,
 * який визначає два параметри типу [1][2]
 */

/*[0] [1] [2] */
let value: Type<number, string>;

/*
 * [0] вказівка узагальненого типу,
 * якому в якості аргументів
 * вказуються конкретні типи
 * number [1] і string [2]
 */


type Identifier1<T> = {};

interface Identifier<T> {
}

class Identifier<T> {
    public identifier<T>(): void {
    }
}

let identifier2 = class<T> {
};

function identifier3<T>(): void {
}

let identifier4 = function <T>(): void {
};

let identifier5 = <T>() => {
}

type T1<T> = { f1: T };

function f1<T>(p1: T): T {
    let v1: T;

    return v1;
}