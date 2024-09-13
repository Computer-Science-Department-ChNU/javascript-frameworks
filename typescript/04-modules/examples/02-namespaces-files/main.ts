/*
 triple slash reference
 використовується як директива для компілятора і вважається валідною лише якщо визначена на початку файлу
 Цей синтаксис використовується для визначення залежностей між файлами.

 Оскільки в даному файлі використовується
 простір імен Validation, що знаходиться у файлі validator.ts, директива вказує компілятору, що файл validator.ts
 повинен використовуватися під час компіляції поточного файлу main.ts
*/

// Даний приклад коду перевіряє правильність заповнення полів за допомогою об'єкта валідації.

/// <reference path="validator.ts" />

namespace NamespaceFilesSample {
    // data1: містить коректні дані (ім'я, прізвище, вік та електронну адресу).
    // data2: містить некоректні дані (пропущене прізвище, неправильний формат віку та електронної адреси).

    const data1 = {
        firstName: 'Ivan',
        lastName: 'Ivaonv',
        age: 25,
        email: 'ivanov@example.com',
    };

    const data2 = {
        firstName: 'Ivan',
        lastName: '',
        age: 'qwe',
        email: 'example',
    };

    // Набір правил перевірки (config):
    //
    // Поле firstName і lastName повинні бути обов'язковими (required).
    // Поле age повинно бути числом (number).
    // Поле email повинно мати формат електронної пошти (email).
    const config: Record<string, string> = {
        firstName: 'required',
        lastName: 'required',
        age: 'number',
        email: 'email',
    };

    // Функція run:
    //
    // Створюється об'єкт валідації на основі переданих правил.
    // Об'єкти data1 і data2 передаються на валідацію.

    // Для кожного об'єкта виводяться результати валідації:
    // result.valid: чи є всі дані коректними.
    // result.errors: список помилок, якщо дані не відповідають правилам
    export function run() {
        const validator = new Validation.Validator(config);
        let result: Validation.ValidationResult = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);

        result = validator.validate(data2);
        console.log(result.valid); // false
        console.log(result.errors);
    }
}

NamespaceFilesSample.run();
