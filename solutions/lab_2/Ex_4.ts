abstract class Employee {
    constructor(protected name: string,
                protected age: number,
                protected salary: number) {
    }

    public abstract getAnnualBonus(): number;

    public getSalary(): number {
        return this.salary;
    }
}

interface Payable{
    pay(): void
}

class Developer extends Employee implements Payable{
    constructor(name: string,
                age: number,
                salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return 1.1;
    }

    pay() {
        console.log(`${this.salary * this.getAnnualBonus()} was payed`)
    }
}

class Manager extends Employee implements Payable{
    constructor(name: string,
                age: number,
                salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return 1.2;
    }

    pay() {
        console.log(`${this.salary * this.getAnnualBonus()} was payed`)
    }
}

const employees: Employee[] = [
    new Developer("Alice", 25, 3000),
    new Developer("Bob", 30, 4000),
    new Manager("Charlie", 40, 5000),
    new Manager("Diana", 35, 6000)
];

let totalBonus = 0;

employees.forEach(emp => {
    const bonusRate = emp.getAnnualBonus();
    const salary = emp.getSalary();
    const bonus = salary * (bonusRate - 1);
    totalBonus += bonus;
});

console.log("Total annual bonus:", totalBonus);