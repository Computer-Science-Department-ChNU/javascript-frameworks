// Type assertion - затвердження типів, 
// в інших мовах програмування це можуть називати приведення типів.
// За допомогою затвердження типів можна підказати 
// компілятору, конкретний тип з яким ми зараз працюємо.

let someData: any = "Hello world";

// твердження, що значення someData є типом string
// використання синтаксису "angle-bracket"
let strLength1: number = (<string>someData).length; 

// твердження, що значення someData є типом string 
// використання синтаксису "as"
let strLength2: number = (someData as string).length; 

