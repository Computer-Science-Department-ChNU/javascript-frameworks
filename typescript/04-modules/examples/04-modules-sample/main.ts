// Після компіляції ts файли будуть перетворені js
// для роботи прикладів у tsconfig.json потрібно встановити "module": "es6"
import { Validator, ValidationResult } from './validator.js';

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

// налаштування об'єкта для перевірки
const config = {
  firstName: 'required',
  lastName: 'required',
  age: 'number',
  email: 'email',
};

const validator = new Validator(config);
let result: ValidationResult = validator.validate(data1);
console.log(result.valid); // true
console.log(result.errors);

result = validator.validate(data2);
console.log(result.valid); // false
console.log(result.errors);
