// Якщо для визначення параметрів у конструкторі вказати їм модифікатори доступу
// Ці параметри автоматично стануть полями класу з відповідним рівнем доступу
// та значеннями, які будуть встановлені при виклику конструктора.
class Person {
    constructor(public name: string, private age: number) {
    }

    print() {
        console.log(this.name + ' ' + this.age);
    }
}

const person: Person = new Person('John', 25);
person.print();

person.name = 'Ivan'; // поле public
// person.age = 111; // поле private
