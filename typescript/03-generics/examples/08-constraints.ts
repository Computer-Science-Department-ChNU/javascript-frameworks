interface EqualityComparer<T> {
  equals(item: T): boolean;
}

// Для EqualityComparer<T> type variable буде такий же як для UniqueCollection
class UniqueCollection<T extends EqualityComparer<T>> {
  private data: T[] = [];

  public add(item: T) {
    const isInArray: boolean = this.data.some(x => x.equals(item));
    if (!isInArray) {
      this.data.push(item);
    }
  }

  public showData() {
    console.log(this.data);
  }
}

class Order implements EqualityComparer<Order> {
  constructor(
    public id: number,
    public customer: string,
    public product: string,
  ) {}

  equals(item: Order): boolean {
    return item.id === this.id;
  }
}

const order1 = new Order(1, 'John', 'Laptop');
const order2 = new Order(2, 'Robin', 'Mobile Phone');
const order3 = new Order(3, 'Bob', 'Book');
const order4 = new Order(1, 'Stephan', 'Book');

const collection = new UniqueCollection<Order>();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);

collection.showData();
