// enum - перелік, тип даних, який дозволяє
// набору цілих значень задати імена.
// За замовчанням перерахування нумерують
// свої елементи починаючи з 0

// Red = 0, Green = 1, Blue = 2 - ключі перечислення
enum Color {
    Red,
    Green,
    Blue,
}

//const c1: Color = Color.Green;
const c1: number = Color.Green; // але number - обширне поняття, тому вказувати треба Color
console.log(c1);

// кожному елементу перерахування явно встановлюється значення
enum Status {
    Success = 1,
    Error = 5,
    Rejected = 10,
}
const c2: Status = Status.Success;
console.log(c2);

// оскільки першому елементу явно встановлено значення 2,
// всі наступні продовжуватимуть нумерацію з 2
// Circle = 2, Triangle = 3, Square = 4
enum Shape {
    Circle = 'circle',
    Triangle = 'triangle',
    Square = 'square',
}
const c3: Shape = Shape.Square;
console.log(c3);

// звертаючись до перерахування через індексатор та
// вказуючи ціле значення можна отримати рядкове
// представлення цього значення
const c4: string = Status[1];
console.log(c4);

///////////////////////////////////////////////////////////////////////
// Приклад використання перерахувань
///////////////////////////////////////////////////////////////////////

function drawImage1(fruit: number) {
    const domElement: HTMLImageElement = document.createElement('img');

    switch (fruit) {
        case 0:
            domElement.src = '../images/apple.jpg';
            break;
        case 1:
            domElement.src = '../images/orange.jpg';
            break;
        case 2:
            domElement.src = '../images/tomato.jpg';
            break;
    }

    document.body.appendChild(domElement);
}

drawImage1(2); // створити зображення з яблуком (не очевидно), 2 - magic numbers!!! do not use this params - bad code!

// Перепишемо drawImage1 з використанням enum
enum Fruit {
    Apple,
    Orange,
    Tomato,
}

// Такий код є декларативним та сам говорить за себе, зо він робить
function drawImage2(fruit: Fruit) {
    const domElement: HTMLImageElement = document.createElement('img');

    switch (fruit) {
        case Fruit.Apple:
            domElement.src = '../images/apple.jpg';
            break;
        case Fruit.Orange:
            domElement.src = '../images/orange.jpg';
            break;
        case Fruit.Tomato:
            domElement.src = '../images/tomato.jpg';
            break;
    }

    document.body.appendChild(domElement);
}

drawImage2(Fruit.Apple); // створити зображення апельсина (код, що самодокументується)

// У TypeScript, запис key in Fruit
// використовується для створення об'єкта з
// обмеженим набором ключів, де кожен ключ є значенням з типу Fruit.

// [key in Fruit] означає, що ключами об'єкта fruitImages
// можуть бути тільки значення, визначені в Fruit (тобто "Apple", "Orange", "Tomato" в даному прикладі).

// Таким чином, структура { [key in Fruit]: string } означає,
// що об'єкт fruitImages має ключі, кожен з яких є значенням з Fruit,
// а значення кожного ключа — це рядок (string).

function drawImage3(fruit: Fruit) {
    const fruitImages: { [key in Fruit]: string } = {
        [Fruit.Apple]: '../images/apple.jpg',
        [Fruit.Orange]: '../images/orange.jpg',
        [Fruit.Tomato]: '../images/tomato.jpg',
    };

    const domElement: HTMLImageElement = document.createElement('img');
    domElement.src = fruitImages[fruit];
    document.body.appendChild(domElement);
}

drawImage3(Fruit.Orange)