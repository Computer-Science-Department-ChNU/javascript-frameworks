function writeLog<T>(value: T): T {
  //   console.log(value.length); // властивість length немає на типі Т
  // так як значення для типу Т може бути будь-який тип даних, компілятор перевіряє
  // щоб звернення до такого типу не призвели до винятків.
  // Наприклад у типу string властивість length існує, а в типі number його немає
  return value;
}

// функція приймає масив типу Т
function writeLogArray1<T>(value: T[]): T[] {
  console.log(value.length); // масиви мають властивість length
  return value;
}

function writeLogArray2<T>(value: Array<T>): Array<T> {
  console.log(value.length); // масиви мають властивість length
  return value;
}

function action<T>(value?: T): T | undefined {
  return value;
}

action<number>(0); // function action<number>(value?: number | undefined): number | undefined
action(0); // function action<0>(value?: 0 | undefined): 0 | undefined

action<string>('0'); // function action<string>(value?: string | undefined): string | undefined
action('0'); // function action<"0">(value?: "0" | undefined): "0" | undefined

action(); // function action<unknown>(value?: unknown): unknown