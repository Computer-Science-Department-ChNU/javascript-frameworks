class KeyValuePair<TKey, TValue> {
  private _key: TKey;

  public set key(value: TKey) {
    if (value === null || value === undefined) {
      throw new Error('Значення value не може бути порожнім');
    }
    this._key = value;
  }

  public get key(): TKey {
    return this._key;
  }

  private _value: TValue;

  public set value(value: TValue) {
    if (value === null || value === undefined) {
      throw new Error('Значення value не може бути порожнім');
    }
    this._value = value;
  }

  public get value(): TValue {
    return this._value;
  }
}

const strAndNum = new KeyValuePair<string, number>();
strAndNum.key = 'key1';
strAndNum.value = 123;

// strAndNum.value = "123";
// strAndNum.key = null;
