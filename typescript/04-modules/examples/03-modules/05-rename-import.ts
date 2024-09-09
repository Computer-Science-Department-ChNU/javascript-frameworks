import {EmailValidator as EmailV} from '03-export-statement'; // імпорт із зазначенням іншого імені

class EmailValidator {
    validate() {
        return true;
    }
}

const x: EmailV = new EmailV();
const y: EmailValidator = new EmailValidator();
