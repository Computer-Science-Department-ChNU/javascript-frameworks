// Найпоширеніший приклад використання статичних полів це клас Math
// Щоб скористатись методами класу Math нам не потрібен екземпляр
console.log(Math.PI);
console.log(Math.random());

// так працювати не буде:
// const math = new Math();
// math.random();

// Патерн singleton (одинак)
class Database {
    private static readonly instance: Database = new Database(); // статичне приватне поле

    // Приватний конструктор, щоб заборонити створення екземплярів класу
    private constructor() {
        console.log('Викликаємо конструктор');
    }

    // Статичний метод, існує лише у класа та відсутній у екземпляра
    public static getInstance(): Database {
        return Database.instance;
    }

    // методи для роботи з базою даних
    public getData(): void {
        console.log('Received data from Database');
    }

    public setData(): void {
        console.log('Data saved to Database');
    }
}

// const database: Database = new Database(); // Constructor of class 'Database' is private and only accessible within the class declaration.

// Database.getData() //Property 'getData' does not exist on type 'typeof Database'.
// Database.setData() //Property 'setData' does not exist on type 'typeof Database'.

const db: Database = Database.getInstance();
db.getData();
db.setData();

const db2: Database = Database.getInstance();
console.log('db === db2', db === db2); // якщо екземпляр класу один, то маємо отримати true
