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

test2.call(someTestObj, 10, 20); // Встановлення контексту, варіант 1
test2.apply(someTestObj, [30, 40]); // Встановлення контексту, варіант 2
const newFunc = test2.bind(someTestObj); // Встановлення контексту, варіант 3
newFunc(50, 60);
