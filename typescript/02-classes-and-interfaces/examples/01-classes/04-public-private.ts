enum Position {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior',
}

class Developer {
    name: string; // модифікатор доступу public - вказує, що поле, видиме за межами даного класу
    private position: Position; // модифікатор доступу private - вказує, що дане поле закрите і не доступне за межами класу
    private salary: number;

    constructor(name: string, position: Position) {
        this.name = name;
        this.position = position;
        this.salary = this.countSalary();
    }

    private countSalary(): number {
        switch (this.position) {
            case Position.Junior:
                return 700;
            case Position.Middle:
                return 2000;
            case Position.Senior:
                return 5000;
            default:
                throw new Error('Недоступна позиція');
        }
    }

    public setPosition(position: Position): void {
        // тут може бути додаткова перевірка, перш ніж оновити позицію девелопера
        this.position = position;
        this.salary = this.countSalary();
    }

    public print(): void {
        console.log(`employee - ${this.name}, \nposition - ${this.position}, \nsalary - ${this.salary}`);
    }
}

const dev: Developer = new Developer('Ivan', Position.Junior);
dev.name = 'John';
// dev.salary = 100000000000; // Property 'salary' is private and only accessible within class 'Developer'.
// dev.position = Position.Senior; // Property 'position' is private and only accessible within class 'Developer'.

dev.print();
dev.setPosition(Position.Middle);
dev.print();
