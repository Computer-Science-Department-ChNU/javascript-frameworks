class Base {
    private value1: string;
    public value2: string;
    protected value3: string;

    constructor() {
        this.value1 = 'private value 1';
        this.value2 = 'public value 2';
        this.value3 = 'protected value 3';
    }

    private method1(): void {
        console.log('private method 1 call.');
    }

    public method2(): void {
        console.log('public method 2 call.');
    }

    protected method3(): void {
        console.log('protected method 3 call.');
    }
}

// клас Derived успадковує клас Base, клас Derived розширює клас Base
class Derived extends Base {
    constructor() {
        super(); // Виклик конструктора базового класу. ОБОВ'ЯЗКОВА операція при наслідуванні!!

        // console.log('private property = ' + this.value1);
        console.log('public property = ' + this.value2);
        console.log('protected property = ' + this.value3);

        // this.method1(); // метод private, прихований
        this.method2(); // public - відкритий для всіх
        this.method3(); // protected - доступний, оскільки цей клас є спадкоємцем
    }
}

const derived: Derived = new Derived();

// доступний лише метод method2 та value2, оскільки вони public. Інші елементи не доступні, оскільки цей код знаходиться за межами класу.
// console.log(derived.value1);
// console.log(derived.value3);
console.log(derived.value2);

// derived.method1();
// derived.method3();
derived.method2();
