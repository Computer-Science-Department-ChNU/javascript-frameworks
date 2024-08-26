class MyClass {
    value: string;

    // визначаємо конструктор для ініціалізації класу
    constructor() {
        console.log('Працює конструктор класу MyClass1');
        this.value = 'Hello world';
    }
}

console.log('Створення екземпляра класу MyClass1');
const temp = new MyClass(); // виклик конструктора, визначеного на рядку 5
console.log(temp.value);
