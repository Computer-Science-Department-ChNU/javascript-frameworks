// function* - generator function
function* stringSequence() {
    yield 'Hello';
    yield ' ';
    yield 'world';
    yield '!';
}

const iterable1 = stringSequence(); // отримання generator object саме тіло функції не виконується
let result = '';

// коли буде викликаний метод next почне виконуватися generator function до першого ключового слова yield
// після цього функція призупинить свою роботу до наступного виклику методу next
for (const item of iterable1) {
    result += item;
}
console.log(result);

class MyStringCollection {
    private values: string[] = ['Hello', ' ', 'world', '!'];

    * getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

const iterable2 = new MyStringCollection().getValues();
result = '';

for (const item of iterable2) {
    result += item;
}
console.log(result);
