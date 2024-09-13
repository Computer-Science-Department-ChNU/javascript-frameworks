/// <reference path="validator-strategies.ts" />

/*
    Даний код реалізує патерн "стратегія"
    для вибору відповідної стратегії валідації даних.
    ValidatorSelector — це клас, який управляє вибором
    валідаторів для різних правил перевірки
    (наприклад, для перевірки на обов'язковість, число або електронну пошту).
*/

namespace Validation {
    export class ValidatorSelector {
        /*
            Статичне поле validators:
            Це об'єкт, в якому зберігаються валідатори,
            де ключ — це назва правила,
            а значення — об'єкт відповідної стратегії валідації,
            що реалізує інтерфейс або клас ValidationStrategy.
         */
        private static validators: { [id: string]: Validation.ValidationStrategy } = {};

        // Метод initialize заповнює поле validators
        // конкретними валідаторами:
        static initialize() {
            // 'required' відповідає валідатору RequiresValidator,
            // який перевіряє обов'язковість поля.
            ValidatorSelector.validators['required'] = new RequiresValidator();

            // 'number' відповідає валідатору NumberValidator,
            // який перевіряє, чи є значення числом.
            ValidatorSelector.validators['number'] = new NumberValidator();

            // 'email' відповідає валідатору EmailValidator,
            // який перевіряє формат електронної пошти.
            ValidatorSelector.validators['email'] = new EmailValidator();
            /*
                Після першого виклику ініціалізації,
                метод перезаписується порожньою функцією,
                щоб уникнути повторної ініціалізації
                (це техніка, яка запобігає повторному виконанню коду).
             */
            ValidatorSelector.initialize = () => {};
        }
        /*
            Метод select приймає назву правила як аргумент
            (name) і повертає відповідний валідатор з поля validators.
            Якщо валідатор для переданого імені не знайдений,
            викидається помилка з повідомленням, що валідатор не знайдено.
         */
        static select(name: string): ValidationStrategy {
            const validator: ValidationStrategy = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            } else {
                throw new Error('He знайдено валідатор  ' + name);
            }
        }
    }
}

/*
Принцип роботи:

Ініціалізація (initialize)
викликається при створенні об'єкта Validator,
щоб зареєструвати всі валідатори у статичному полі validators.
Це робиться тільки один раз завдяки тому, що після першого виклику,
метод initialize переписується і більше не виконується.

Вибір валідатора (select)
При передачі назви правила (наприклад, 'required', 'number'),
метод повертає об'єкт валідатора, що відповідає цьому правилу.
Якщо правило не знайдено, генерується помилка.


Взаємодія з іншими частинами:
Validator
Клас Validator викликає метод ValidatorSelector.select()
для отримання відповідного валідатора при перевірці кожного поля.

Стратегії валідації (ValidationStrategy)
Кожна з конкретних стратегій валідації,
таких як RequiresValidator, NumberValidator, та EmailValidator,
реалізує логіку перевірки даних відповідно до свого правила.


Загальний потік:

1 - Ініціалізація - ValidatorSelector.initialize() викликається
один раз для реєстрації валідаторів.

2 - Вибір валідатора - під час валідації даних метод ValidatorSelector.select()
повертає відповідний валідатор для кожного правила.

3 - Валідація - кожен валідатор перевіряє своє правило,
і якщо валідація не проходить, це відображається у вигляді помилок.
 */