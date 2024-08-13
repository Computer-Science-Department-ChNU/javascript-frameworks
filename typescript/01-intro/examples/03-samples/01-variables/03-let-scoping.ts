function let1() {
    // console.log(i); // Cannot find name 'i' - hoisting не працює з let, до моменту ініціалізації
    // console.log(test); // Cannot find name 'test'

    for (let i = 0; i < 10; i++) { // блок
        let test = i;
    }

    // console.log(i); // Cannot find name 'i' - let та const мають блочну область видимості
    // console.log(test); // Cannot find name 'test'
}

let1();

// Повторне визначення змінної не призводить до помилки.
function let2() {
    let a = 10;
    // Cannot redeclare block-scoped variable 'a'
    // var a = 20;
    console.log(a); // 10
}

let2();

// 0, 1, 2, 3, 4
function let3() {
    // скільки тут областей видимості?
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    }
}

let3();
