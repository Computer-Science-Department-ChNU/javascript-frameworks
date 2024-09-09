// Псевдонім
// Можливо, нам доводиться створювати безліч об’єктів Shapes.Complex.Image(),
// але щоразу набирати повне ім’я класу з урахуванням просторів імен, ймовірно,
// не всім сподобатися, особливо коли модулі мають глибоку вкладеність за принципом матрьошки.
// Щоб скоротити обсяг коду, ми можемо використовувати псевдоніми, що задаються ключовим словом import .
namespace Shapes {
    export class Circle {
        constructor() {
            console.log('Circle');
        }
    }

    export class Square {
        constructor() {
            console.log('Square');
        }
    }

    // Вкладені простори імен
    export namespace Complex {
        export class Image {
            constructor() {
                console.log('Image');
            }
        }

        export class Animation {
            constructor() {
                console.log('Animation');
            }
        }
    }
}

// створення псевдоніма з ім'ям complex для простору імен Shapes.Complex
import complex = Shapes.Complex;

const img1 = new complex.Image();
const img2 = new Shapes.Complex.Image(); // те саме, що і 30 рядок

// або
import shapeImg = Shapes.Complex.Image;

const img3 = new shapeImg();
