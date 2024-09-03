// цей інтерфейс буде реалізований класом, який містить дані, які можна отримати.
// колекція даних
interface MyIterable<T> {
    values(): MyIterator<T>;
}

// даний інтерфейс описує об'єкт, що контролює обхід даних у колекції
interface MyIterator<T> {
    next(): MyIteratorResult<T>;
}

// Цей інтерфейс описує об'єкт, що визначає результати роботи ітератора
interface MyIteratorResult<T> {
    done: boolean;
    value: T;
}

class Point {
    constructor(public x: number, public y: number) {
    }
}

// колекція
class Vector implements MyIterable<Point> {
    private points: Point[] = [];

    public add(item: Point) {
        this.points.push(item);
    }

    values(): MyIterator<Point> {
        return new VectorIterator(this.points);
    }
}

// ітератор для колекції Vector
class VectorIterator implements MyIterator<Point> {
    private current: number = 0;

    constructor(private points: Point[]) {
    }

    public next(): MyIteratorResult<Point> {
        if (this.current < this.points.length) {
            return {
                done: false,
                value: this.points[this.current++],
            };
        } else {
            return {
                done: true,
                value: null,
            };
        }
    }
}

const vector: Vector = new Vector();
vector.add(new Point(10, 20));
vector.add(new Point(1, 30));
vector.add(new Point(0, 2));
vector.add(new Point(15, 12));

// використання ітератора
const iterator = vector.values();
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
