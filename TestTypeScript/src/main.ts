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



// interfaces
interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
}
const me: IsPerson = {
    name: 'shaun',
    //age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent ', amount);
        return amount;
    },
};
console.log(me);    
me.speak('hello, world');
const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}
greetPerson(me);


// Generics

//! hena lw get 3mlt fl consile docOne.age msls mesh hynf3 l2no mesh 3arf eh ele gowa el docOne how hena hygbhalk kolha bs mesh hygblk kol w7da 3la 7daa
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);

//! hena hygblk kol w7da 3la 7daa
const addUID2 = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
} 
let docTwo = addUID2({ name: 'yoshi', age: 40 });
console.log(docTwo.name);


// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

//practice generic with enums
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const interfaceOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const interfaceTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(interfaceOne);
console.log(interfaceTwo);



// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];