interface MyObj {
    readonly a: number;
    b: string;
    c?: boolean; // опціональне поле
    print?: () => number | undefined; // опціональний метод
    // але в нас може бути ще додатковий набір ключей
    [key: string]: string | number | boolean | object;
}

const obj: MyObj = {
    a: 1,
    b: '3',
    c: false
}

const obj2: MyObj = {
    a: 55,
    b: 'string',
}

// obj.a = 44 - readonly
obj.b = 'dddd'

// Об'єднання інтерфейсів
interface IPerson {
    name: string;
    age: number;
}

interface IAccount {
    login: string;
    email: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}

const frontendDeveloper: IDeveloper = {
    name: 'Artem',
    age: 36,
    email: 'artemkarachevtsev@gmail.com',
    login: 'artem',
    active: true,
    skills: ['JavaScript', 'TypeScript'],
}

// список з співробітників кожен співробітник має задовільняти інтерфейсу IDeveloper
const devArr: IDeveloper[] = [];