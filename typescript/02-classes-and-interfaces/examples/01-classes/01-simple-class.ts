// class - це свого роду "шаблон" для створення об'єкта
// він визначає як буде виглядати об'єкт і що він буде робити
// тут ми визначаємо властивості, методи, модифікатори доступу

class User {
    firstName: string; // властивість
    lastName: string; // властивість

    // метод
    print(): void {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const user1: User = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user1
user1.firstName = 'Ivan'; // присвоєння значення властивості firstName на екземплярі user1
user1.lastName = 'Ivanov';

const user2: User = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user2
user2.firstName = 'John'; // присвоєння значення властивості firstName на екземплярі user2
user2.lastName = 'Doe';

user1.print(); // виклик методу print на екземплярі user1
user2.print(); // виклик методу print на екземплярі user2
console.log(user1);
