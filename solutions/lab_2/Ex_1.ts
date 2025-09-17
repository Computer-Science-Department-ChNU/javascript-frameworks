interface Animal {
    name: String;
    weight?: number;
    move(): void;
    tellWeight?(): void;
}

class Cat implements Animal {
    public name: String
    public weight?: number

    constructor(name: String,
                weight?: number) {
        this.name = name;
        this.weight = weight;
    }

    move(){
        console.log("Cat is running")
    }

    tellWeight(): void {
        console.log(`My weight is ${this.weight}`)
    }
}

class Bird implements Animal {
    constructor(public name: String) {
    }

    move() {
        console.log("Bird is flying")
    }
}
class Fish implements Animal {
    constructor(public name: String) {
    }

    move() {
        console.log("Fish is swimming")
    }
}

var fish: Fish = new Fish("Vlad");
fish.move()

