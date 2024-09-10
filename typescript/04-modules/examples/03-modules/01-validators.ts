/*
    Модуль - окремий файл зі своєю областю видимості. Змінні функції, класи і т.д. визначені у модулі
    не доступні поза її межами.

    Будь-який файл, у якому на верхньому рівні знаходиться import чи export є модулем.

    Залежності між модулями визначаються за допомогою ключового слова import

    Модулі імпортуються за допомогою завантажувачів модулів.
    Під час виконання завантажувач модуля відповідальний за визначення
    розташування модуля та його завантаження перед його виконанням.
*/

export interface Validator {
    validate(value: string): boolean;
}

export class CreditCardValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}

export class UrlValidator implements Validator {
    validate(value: string): boolean {
        return false;
    }
}
