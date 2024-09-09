import {Validator} from "./01-validators"; // імпорт інтерфейсу Validator з модуля 01-validators
// import { Validator, CreditCardValidator } from "./01-validators"; // імпорт кількох типів 

class PhoneNumberValidator implements Validator {
    validate(value: string): boolean {
        return true;
    }
}

const phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));