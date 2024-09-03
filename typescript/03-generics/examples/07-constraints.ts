interface Countable {
  count: number;
}

// <T extends Countable> - обмеження, що вказує на те, що T (type variable)
// має бути типом даних, який реалізовує інтерфейс Countable, оскільки
// логіка класу SortableList передбачає використання властивості count
class SortableList<T extends Countable> {
  private data: T[] = [];

  public add(item: T) {
    this.data.push(item);
  }

  public showSorted() {
    // (a, b) => a.count - b.count - цей вираз компілюється завдяки
    // обмеження. TS компілятор знає, що тип даних передано як T
    // міститиме властивість count
    let sorted: T[] = this.data.sort((a, b) => a.count - b.count);
    console.log(sorted);
  }
}

class OrdersArchive implements Countable {
  constructor(
    public month: string,
    public count: number,
    public totalAmount: number,
  ) {}
}

const list = new SortableList<OrdersArchive>();

list.add(new OrdersArchive('January', 5, 23400));
list.add(new OrdersArchive('February', 2, 18100));
list.add(new OrdersArchive('March', 10, 22900));

list.showSorted();
