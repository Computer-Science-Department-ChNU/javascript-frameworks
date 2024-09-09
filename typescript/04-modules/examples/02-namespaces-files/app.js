var Validation;
(function (Validation) {
    var RequiresValidator = /** @class */ (function () {
        function RequiresValidator() {
            this.message = "Обов'язкове значення";
        }

        RequiresValidator.prototype.validate = function (value) {
            return value !== '';
        };
        return RequiresValidator;
    }());
    Validation.RequiresValidator = RequiresValidator;
    var NumberValidator = /** @class */ (function () {
        function NumberValidator() {
            this.message = 'Значення має бути числом';
        }

        NumberValidator.prototype.validate = function (value) {
            return /\d+/.test(value);
        };
        return NumberValidator;
    }());
    Validation.NumberValidator = NumberValidator;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
            this.message = 'Значення має бути  email адресою';
        }

        EmailValidator.prototype.validate = function (value) {
            return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
/// <reference path="validator-strategies.ts" />
var Validation;
(function (Validation) {
    var ValidatorSelector = /** @class */ (function () {
        function ValidatorSelector() {
        }

        ValidatorSelector.initialize = function () {
            ValidatorSelector.validators['required'] = new Validation.RequiresValidator();
            ValidatorSelector.validators['number'] = new Validation.NumberValidator();
            ValidatorSelector.validators['email'] = new Validation.EmailValidator();
            ValidatorSelector.initialize = function () {
            }; // для уникнення повторної ініціалізації
        };
        ValidatorSelector.select = function (name) {
            var validator = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            } else {
                throw new Error('He знайдено валідатор  ' + name);
            }
        };
        ValidatorSelector.validators = {};
        return ValidatorSelector;
    }());
    Validation.ValidatorSelector = ValidatorSelector;
})(Validation || (Validation = {}));
/// <reference path="validator-selector.ts" />
var Validation;
(function (Validation) {
    var Validator = /** @class */ (function () {
        function Validator(config) {
            this.config = config;
            Validation.ValidatorSelector.initialize();
        }

        Validator.prototype.validate = function (data) {
            var _this = this;
            var messages = [];
            var keys = Object.keys(data);
            keys.forEach(function (key) {
                var validatorName = _this.config[key];
                if (!validatorName) {
                    return;
                }
                var validator = Validation.ValidatorSelector.select(validatorName);
                var validatorValue = String(data[key]);
                var isValid = validator.validate(validatorValue);
                if (!isValid) {
                    var message = 'He вірне значення для  ' + key + ', ' + validator.message;
                    messages.push(message);
                }
            });
            return {
                valid: messages.length === 0,
                errors: messages,
            };
        };
        return Validator;
    }());
    Validation.Validator = Validator;
    var ValidationResult = /** @class */ (function () {
        function ValidationResult() {
        }

        return ValidationResult;
    }());
    Validation.ValidationResult = ValidationResult;
})(Validation || (Validation = {}));
/*
 triple slash reference
 використовується як директива для компілятора і вважається валідною лише якщо визначена на початку файлу
 Цей синтаксис використовується для визначення залежностей між файлами. Оскільки в даному файлі використовується
 простір імен Validation, що знаходиться у файлі validation.ts, директива вказує компілятору, що файл validation.ts
 повинен використовуватися під час компіляції поточного файлу main.ts
*/
/// <reference path="validator.ts" />
var NamespaceFilesSample;
(function (NamespaceFilesSample) {
    var data1 = {
        firstName: 'Ivan',
        lastName: 'Ivaonv',
        age: 25,
        email: 'ivanov@example.com',
    };
    var data2 = {
        firstName: 'Ivan',
        lastName: '',
        age: 'qwe',
        email: 'example',
    };
    // визначення правил перевірки об'єктів
    var config = {
        firstName: 'required',
        lastName: 'required',
        age: 'number',
        email: 'email',
    };

    function run() {
        var validator = new Validation.Validator(config);
        var result = validator.validate(data1);
        console.log(result.valid); // true
        console.log(result.errors);
        result = validator.validate(data2);
        console.log(result.valid); // false
        console.log(result.errors);
    }

    NamespaceFilesSample.run = run;
})(NamespaceFilesSample || (NamespaceFilesSample = {}));
NamespaceFilesSample.run();
