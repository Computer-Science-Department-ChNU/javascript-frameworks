// базовий тип даних
class Shape {
    public name: string;

    constructor(name) {
        this.name = name;
    }

    public getInfo(): string {
        return `This is ${this.name}.`;
    }
}

// похідний тип даних
class Rect extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super('Rectangle'); // запуск конструктора батьківського класу
        this.width = width;
        this.height = height;
    }

    public getInfo(): string {
        const baseInfo: string = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}

const newRect: Shape = new Rect(100, 200);
console.log(newRect.getInfo());

// похідний тип даних
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super('Circle');
        this.radius = radius;
    }

    public getInfo(): string {
        const baseInfo: string = super.getInfo(); // виклик методу батьківського класу
        return `${baseInfo} Radius = ${this.radius}`;
    }
}

const shapes: Shape[] = []; // створення масиву базового типу
shapes.push(new Rect(100, 200)); // заповнення масиву екземплярами похідного класу
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));

// до масиву shapes можна додавати тільки об'єкти, які мають ідентичну з класом Shape структуру
shapes.push({
    name: 'foo',
    getInfo: () => {
        return 'bar';
    },
});

for (let i = 0; i < shapes.length; ++i) {
    const info: string = shapes[i].getInfo();
    console.log(info);
}
