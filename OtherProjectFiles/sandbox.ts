const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});
let firstName = 'mario';
let age = 30;
console.log(age);
let isBlackbelt = false;
console.log(isBlackbelt);

const circ = (diameter: number) => {
    return diameter * Math.PI
}
// console.log(circ('hello'); // Can't do it.
console.log(circ(age));

let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3); // can't do it.

let numbers = [10, 20, 30];
numbers.push(24);
// numbers.push('hello');

let mixed = ['ken', 4, true];
// As long as we declare a mixed array initially, then it's ok. 
mixed.push('hello');
mixed.push(10);
mixed.push(true);
mixed[2] = false;
mixed[0] = 23;


let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
//Explict types : Lesson 5
let myVariable: string;
let myNumber:number;
let myBoolean:boolean;
// myNumber='hello';
myNumber=20;
// myBoolean='string';
myBoolean=true;

//Arrays
let ninjas :string[]=[];//initialize as an empty array
ninjas.push('shaun');

//Union types
let mixedArray: (string|number|boolean)[] = []; //can have any combination of the string,number and or boolean
mixedArray.push('string');
mixedArray.push(10);
mixedArray.push(true);
console.log(mixedArray);
