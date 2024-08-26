class Student {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    print() {
        console.log(`Student - ${this.firstName}, age - ${this.age} years.`);
    }
}

const student1 = new Student('Ivan', 25); // виклик конструктора з передачею параметрів
const student2 = new Student('John', 24);

student1.print();
student2.print();
console.log(student1);
