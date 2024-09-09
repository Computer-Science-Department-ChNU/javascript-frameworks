class EmailValidator {
    isCorrect(email: string) {
        throw new Error('Method not implemented.');
    }
}

class EmailValidator2 {
    isCorrect(email: string) {
        throw new Error('Method not implemented.');
    }
}

// export { EmailValidator, EmailValidator2 };
export {EmailValidator, EmailValidator2 as MyEmailValidator}; // експорт із зазначенням іншого імені
