abstract class Car {
    constructor(protected name: string,
                protected fuelType: string,
                protected manufacturer: string,
                protected year: number) {
    }

    public abstract showModel(): string;
    public showInfo(): string{
        return `Name: ${this.name}\nFuel type: ${this.fuelType}
        \nManufacturer${this.manufacturer}\nYear${this.year}\n`;
    }
}

class Toyota extends Car{
    constructor(name: string,
                fuelType: string,
                manufacturer: string,
                year: number,
                private model: string) {
        super(name, fuelType, manufacturer, year);
    }

    showInfo() {
        return super.showInfo() + `Model ${this.model}`;
    }

    showModel() {
        return this.model;
    }
}

class Ford extends Car{
    constructor(name: string,
                fuelType: string,
                manufacturer: string,
                year: number,
                private model: string) {
        super(name, fuelType, manufacturer, year);
    }

    showInfo() {
        return super.showInfo() + `Model ${this.model}`;
    }

    showModel() {
        return this.model;
    }
}

class BMW extends Car{
    constructor(name: string,
                fuelType: string,
                manufacturer: string,
                year: number,
                private model: string) {
        super(name, fuelType, manufacturer, year);
    }

    showInfo() {
        return super.showInfo() + `Model ${this.model}`;
    }

    showModel() {
        return this.model;
    }
}

const cars: Car[] = [
    new Toyota("Toyota", "Hybrid", "Toyota Motor Corporation", 2022, "Corolla"),
    new Toyota("Toyota", "Petrol", "Toyota Motor Corporation", 2021, "Camry"),

    new Ford("Ford", "Petrol", "Ford Motor Company", 2020, "Mustang"),
    new Ford("Ford", "Diesel", "Ford Motor Company", 2019, "Focus"),

    new BMW("BMW", "Petrol", "Bayerische Motoren Werke AG", 2023, "M3"),
    new BMW("BMW", "Hybrid", "Bayerische Motoren Werke AG", 2022, "X5")
];

// Виклик методів:
cars.forEach(car => {
    console.log(car.showInfo());
    console.log("Show model:", car.showModel());
    console.log("-------------");
});