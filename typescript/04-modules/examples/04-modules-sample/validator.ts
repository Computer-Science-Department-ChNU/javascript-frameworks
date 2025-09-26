import {ValidatorSelector} from './validator-selector';

export class Validator {
    private config: Record<string, string>;

    constructor(config: Record<string, string>) {
        this.config = config;
        ValidatorSelector.initialize();
    }

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
