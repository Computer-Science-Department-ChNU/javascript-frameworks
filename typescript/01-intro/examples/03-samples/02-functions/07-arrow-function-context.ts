function repeatOperation(count: number, callback: () => void): void {
    console.log('start');
    for (let i = 0; i < count; i++) {
        callback();
        // Контекст цієї функції - глобальний об'єкт.
        // Якщо в функції callback використовується контекст,
        // він теж буде посилатися на глобальний об'єкт.
    }
    console.log('stop');
}

const settings = {
    displayName: 'test object',

    test1() {
        // в даному випадку this вказує на об'єкт settings
        repeatOperation(
            3,
            function () {
                console.log(this.displayName);
            }.bind(this)
        );
    },

    test2() {
        // стрілочна функція захоплює контекст, у якому була створена)
        repeatOperation(2, () => console.log(this.displayName));
    },
};

// settings.test1();
settings.test2();
