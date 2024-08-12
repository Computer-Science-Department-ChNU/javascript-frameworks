// параметр функції на початку імені якого використовується 
// ... є rest параметром.
// rest параметр – це набір опціональних параметрів. 
// При виклику такого методу кількість параметрів не обмежується.
// тип цієї функції - (message:string, ...names: string[]) => void
function printValue(message: string, ...names: string[]) : void {
    console.log(message);
    for(let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// виклик функції з rest параметрами
printValue("sample 1");
printValue("sample 2", "1", "2");
printValue("sample 3", "1", "2", "abc");