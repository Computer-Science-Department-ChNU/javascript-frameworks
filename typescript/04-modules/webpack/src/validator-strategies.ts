export interface ValidationStrategy {
    validate(value: string): boolean;

    message: string;
}

export class RequiresValidator implements ValidationStrategy {
    validate(value: string): boolean {
        return value !== "";
    };

    message: string = "Обов'язкове значення";
}

export class NumberValidator implements ValidationStrategy {
    validate(value: string): boolean {
        return /\d+/.test(value);
    }

    message: string = "Значення має бути числом"
}

export class EmailValidators implements ValidationStrategy {
    validate(value: string): boolean {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
    }

    message: string = "Значення має бути email адресою"
}
