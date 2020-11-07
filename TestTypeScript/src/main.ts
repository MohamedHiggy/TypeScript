let fun: Function;
fun = () => {
    console.log("arrow fun")
}
//! (?) y3ne lw mesh mesh 3ayz a7otha f hya optional aw momken a3ml kda adeha kema static (c: number | string = 10)
//? lw b3ml return number b3ml b3d () el fun ():number lw b3ml return value b3ml kda (): void
const add = (a: number, b: number, c?: number | string): void => {
    console.log(a + b);
}
add(5, 10, 15);

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDetails: (obj: { name: string, age: number }) => void;
type persone = { name: string, age: number };
logDetails = (ninja: persone) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
