function greetWithAge(name: string, age: number = 18): string {
    return `Привіт, мене звати ${name}, мені ${age} років.`;
}

console.log(greetWithAge("Влад", 20));
console.log(greetWithAge("Назар"));
