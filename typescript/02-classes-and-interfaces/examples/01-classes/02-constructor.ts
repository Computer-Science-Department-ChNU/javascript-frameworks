class MyClass {
    value: string;

    // визначаємо конструктор для ініціалізації класу
    // constructor завжди викликається, коли ми створюємо об'єкт нашого класу MyClass
    constructor() {
        console.log('Працює конструктор класу MyClass');
        this.value = 'Hello world';
    }
}

console.log('Створення екземпляра класу MyClass');
const temp = new MyClass(); // виклик конструктора, визначеного на рядку 5
console.log(temp.value);
