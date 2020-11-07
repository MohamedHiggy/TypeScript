"use strict";
let fun;
fun = () => {
    console.log("arrow fun");
};
//! (?) y3ne lw mesh mesh 3ayz a7otha f hya optional aw momken a3ml kda adeha kema static (c: number | string = 10)
//? lw b3ml return number b3ml b3d () el fun ():number lw b3ml return value b3ml kda (): void
const add = (a, b, c) => {
    console.log(a + b);
};
add(5, 10, 15);
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
