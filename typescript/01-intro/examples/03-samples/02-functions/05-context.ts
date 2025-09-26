/*
Функції у JavaScript - це об’єкти, і в них є методи call, apply, bind,
які дозволяють явно вказати, яке значення має бути у this всередині функції.
 */

// this - контекст функції.
// this - змінна, яка встановлюється під час запуску функції.
function test1() {
    console.log(this);
}

test1(); // global object - Window

const someObj = {
    name: 'test',
    testFunc: test1,
};
someObj.testFunc(); // someObj

const someInstance = new test1(); // new instance
console.log(someInstance);

// Встановлення контексту функції, що викликається
function test2(x: number, y: number) {
    console.log(x + y);
    console.log(this);
}

const someTestObj = {
    name: 'test object',
};

test2.call(someTestObj, 10, 20); // Встановлення контексту, варіант 1. call = викликати функцію з конкретним this + список аргументів (відомими)
test2.apply(someTestObj, [30, 40]); // Встановлення контексту, варіант 2. apply зручно використовувати, коли аргументи вже зібрані в масиві
const newFunc = test2.bind(someTestObj); // Встановлення контексту, варіант 3. Використовується, коли треба зберегти функцію з конкретним контекстом для пізнішого виклику (наприклад, у callback).

//const newFunc = test2.bind(someTestObj, 60, 50); // Встановлення контексту, варіант 3
newFunc(50, 60);
//newFunc();

/*
Функція - актор, а this - сцена, на якій він грає:
call - "Виходь на сцену зараз і зіграй з цими словами".
apply - "Виходь на сцену зараз, але текст діалогу в коробці (масив)".
bind - "Підпиши контракт на виступ, але грати будеш пізніше, на тій сцені, що я вкажу".
 */
