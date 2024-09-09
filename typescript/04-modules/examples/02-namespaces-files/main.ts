/*
 triple slash reference
 використовується як директива для компілятора і вважається валідною лише якщо визначена на початку файлу
 Цей синтаксис використовується для визначення залежностей між файлами. Оскільки в даному файлі використовується
 простір імен Validation, що знаходиться у файлі validation.ts, директива вказує компілятору, що файл validation.ts
 повинен використовуватися під час компіляції поточного файлу main.ts
*/

/// <reference path="validator.ts" />

namespace NamespaceFilesSample {
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

    // визначення правил перевірки об'єктів
    const config: Record<string, string> = {
        firstName: 'required',
        lastName: 'required',
        age: 'number',
        email: 'email',
    };

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
