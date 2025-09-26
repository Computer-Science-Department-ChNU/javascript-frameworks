import {RequiresValidator, NumberValidator, EmailValidators, ValidationStrategy} from './validator-strategies';

export class ValidatorSelector {
    private static validators: { [id: string]: ValidationStrategy } = {};

    static initialize() {
        ValidatorSelector.validators['required'] = new RequiresValidator();
        ValidatorSelector.validators['number'] = new NumberValidator();
        ValidatorSelector.validators['email'] = new EmailValidators();

        ValidatorSelector.initialize = () => {
        };
    }

    static select(name: string): ValidationStrategy {
        const validator: ValidationStrategy = ValidatorSelector.validators[name];
        if (validator) {
            return validator;
        } else {
            throw Error('He знайдено валідатор  ' + name);
        }
    }
}
