/// <reference path="validator-selector.ts" />

// Даний код описує клас Validator, який використовується для валідації
// об'єктів даних на основі набору правил, визначених у конфігурації.
// Валідація здійснюється через селектор валідації validator-selector.ts,
// який вибирає потрібний валідатор для кожного поля даних.

namespace Validation {
    export class Validator {
        // Об'єкт типу Record<string, string>,
        // де ключі відповідають полям об'єкта даних,
        // а значення — це назви правил валідації (наприклад, required, number, email).
        private config: Record<string, string>;

        // Конструктор приймає конфігурацію для правил
        // валідації й ініціалізує клас ValidatorSelector
        constructor(config: Record<string, string>) {
            this.config = config;
            ValidatorSelector.initialize();
        }

        // Метод validate приймає об'єкт даних, який потрібно валідувати.
        public validate(data: Record<string, unknown>): ValidationResult {
            const messages: string[] = [];

            const keys: string[] = Object.keys(data);
            keys.forEach(key => {
                const validatorName = this.config[key];

                if (!validatorName) {
                    return;
                }

                const validator = ValidatorSelector.select(validatorName);

                const validatorValue = String(data[key]);
                const isValid = validator.validate(validatorValue);

                if (!isValid) {
                    const message = 'He вірне значення для  ' + key + ', ' + validator.message;
                    messages.push(message);
                }
            });

            // Повертає об'єкт ValidationResult, який містить:
            // Булеве значення, яке вказує, чи всі дані пройшли валідацію (істинне, якщо немає помилок).
            // Масив повідомлень про помилки, якщо такі є.
            return {
                valid: messages.length === 0,
                errors: messages,
            };
        }
    }

    export class ValidationResult {
        valid: boolean;
        errors: string[];
    }
}

// Принцип роботи:
// Коли викликається метод validate:
// 1- Кожне поле об'єкта перевіряється за відповідним правилом, вказаним у конфігурації.
// 2- Якщо валідатор для поля не знаходиться (відсутнє правило), це поле пропускається.
// 3 - Якщо поле не відповідає вказаному правилу (наприклад,
// некоректний формат електронної пошти або відсутнє значення),
// генерується повідомлення про помилку.
// 4 - Повертається результат, який вказує на успішність
// валідації і містить список помилок (якщо є).
//
// Взаємодія з ValidatorSelector:
// Клас Validator використовує ValidatorSelector для вибору
// конкретного валідатора (наприклад, для перевірки чи є значення числом,
// електронною поштою тощо).