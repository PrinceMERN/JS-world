// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbal, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 4544654464464454n

console.log(typeof bigNumber)

// Reference (Non primitive) 

// Array, Objects, Function

const heros = ["Batman", "Ironman", "Speiderman", "Antman"];

let myObj = 
{
    name : "prince",
    age : 14,

}

const myFunction = function(){
    console.log("hello world")
}

// console.log(typeof heros)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-primitive)



let myYoutubeName = "Prince"

let anotherName  = myYoutubeName 
anotherName = "Govind"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "prince@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne)
console.log(userTwo)

