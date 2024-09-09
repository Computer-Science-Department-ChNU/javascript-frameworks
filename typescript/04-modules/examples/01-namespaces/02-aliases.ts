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
