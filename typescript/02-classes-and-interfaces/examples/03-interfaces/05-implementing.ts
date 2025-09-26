/*
implements означає, що клас зобов’язується реалізувати (виконати) контракт інтерфейсу.
Тобто:
- Інтерфейс описує які властивості та методи повинні бути
- Клас, що використовує implements, повинен реально оголосити та реалізувати їх

Важливо пам'ятати:
- implements != наслідування (extends)
- extends використовується для наслідування поведінки (код + властивості)
- implements використовується для перевірки, чи клас відповідає структурі інтерфейсу (контракту)

Use case extends
- коли треба успадкувати готову поведінку (методи, властивості) з іншого класу
- успадкування коду, коли дитячий клас отримує все з батьківського
- можна перевизначати методи (override)

Use case implements
- коли клас повинен відповідати контракту інтерфейсу (мати певні методи/властивості)
- Цц перевірка структури, але коду з інтерфейсу не передається
- весь функціонал треба реалізувати самому
 */

interface Report {
    name: string;
    body?: string;  // body is optional
    type: string;
    url: string;
    build: () => string;
    toJSON: () => string;
}

class DailyReport implements Report {
    readonly body: ReportBody | null;
    name: string;
    readonly type: string;
    readonly url: string;

    build(): string {
        return 'some daily report data';
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            body: this.body,
            type: this.type,
            url: this.url,
            data: this.build(),
        });
    }
}

class WeaklyReport implements Report {
    readonly body: ReportBody | null;
    name: string;
    readonly type: string;
    readonly url: string;

    build(): string {
        return 'some weakly report data';
    }

    toJSON(): string {
        return JSON.stringify({
            name: this.name,
            body: this.body,
            type: this.type,
            url: this.url,
            data: this.build(),
        });
    }
}

const r1: Report = new DailyReport();
const r2: Report = new WeaklyReport();

console.log(r1.build());
console.log(r2.build());
