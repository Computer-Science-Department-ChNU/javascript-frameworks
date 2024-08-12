function showMessage(message: string): void; // перше перевантаження функції, яка приймає один параметр типу string
function showMessage(message: number): void; // друге перевантаження функції, яка приймає один параметр типу number
function showMessage(message: any): void {
    // безпосередньо реалізація функції, не є перевантаженням
    switch (typeof message) {
        case 'number':
            console.log('Hello world');
            break;

        case 'string':
            console.log(message);
            break;
    }
}

showMessage(1);
showMessage('test');
// showMessage(true); // compile error
