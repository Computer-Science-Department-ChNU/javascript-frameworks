interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Rectangle implements Shape{
    constructor(public width: number,
                public height: number) {
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }

    scale(factor: number): void{
        this.width *= factor
        this.height *= factor
    }
}

class Triangle implements Shape{
    constructor(public a: number,
                public b: number,
                public c: number) {
        if (!this.isValid(a, b, c)) {
            throw new Error("Invalid triangle sides");
        }
    }

    private isValid(a: number, b: number, c: number): boolean {
        return a + b > c && a + c > b && b + c > a;
    }

    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    scale(factor: number): void{
        this.a *= factor
        this.b *= factor
        this.c *= factor
    }
}

class Circle implements Shape{
    constructor(public radius: number) {
    }

    getArea(): number {
        return this.radius * 9.8596;
    }

    getPerimeter(): number {
        return 2 * this.radius * 3.14;
    }

    scale(factor: number): void{
        this.radius *= factor
    }
}

var shapes: Shape[] = []
shapes.push(new Circle(5));
shapes.push(new Rectangle(5, 10));
shapes.push(new Triangle(3, 4, 5));

for (let i of shapes){
    let area: number = i.getArea();
    console.log(`Area is: ${i.getArea()}; Perimeter is: ${i.getPerimeter()}`);
}