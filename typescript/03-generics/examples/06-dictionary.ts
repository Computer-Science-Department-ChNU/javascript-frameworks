class Dictionary<TKey, TValue> {
  private data: KeyValuePair<TKey, TValue>[] = [];

  public add(key: TKey, value: TValue) {
    const entry = new KeyValuePair<TKey, TValue>();
    entry.key = key;
    entry.value = value;
    this.data.push(entry);
  }

  public getValue(key: TKey): TValue | null {
    const entry = this.data.find(item => item.key == key);

    return entry ? entry.value : null;
  }
}

const dictionary = new Dictionary<string, string>();
dictionary.add('hello', 'привіт');
dictionary.add('book', 'книга');
dictionary.add('apple', 'яблуко');

console.log(dictionary.getValue('apple'));

const dictionary2 = new Dictionary<number, boolean>();
dictionary2.add(1, true);
dictionary2.add(2, false);
dictionary2.add(7, true);

console.log(dictionary2.getValue(7));
