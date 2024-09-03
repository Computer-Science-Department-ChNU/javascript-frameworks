// інтерфейс описує generic обʼєкт, яки має поле name типу string та поле data невизначеного типу
interface GenericObj<T> {
  name: string;
  data: T;
}

const obj1: GenericObj<string> = {
  name: 'Bob',
  data: 'Hello',
};

const obj2: GenericObj<number[]> = {
  name: 'Bob',
  data: [1, 2, 3],
};

// obj2.name = 10 // Type 'number' is not assignable to type 'string'.
// obj2.data = 'Bill' // Type 'number' is not assignable to type 'string'.
// obj2.data = [1, 2];
