// namespace (простір імен) - механізм для групування коду та визначення окремих областей видимості.
// Код, поміщений у простір імен, перебуває у області видимості простору імен, а чи не у глобальній області видимості.
// Щоб елементи простору імен були доступні за межами простору імен, необхідно використовувати ключове слово export.

// визначення простору імен з ім'ям Sample1
namespace Sample1 {
    // клас буде доступний за межами простору Sample1
    export class MyClass1 {
        public message() {
            console.log('Sample1.MyClass1.message');
        }
    }

    class MyClass2 {
        public message() {
            console.log('Sample1.MyClass2.message');
        }
    }
}

namespace Sample2 {
    export class MyClass1 {
        public message() {
            console.log('Sample2.MyClass1.message');
        }
    }

    class MyClass2 {
        public message() {
            console.log('Sample2.MyClass2.message');
        }
    }
}

// наступний код знаходиться у глобальній області видимості.

// Використання класу MyClass1 із простору імен Sample1
const temp1 = new Sample1.MyClass1();
temp1.message();

const temp2 = new Sample2.MyClass1();
temp2.message();
