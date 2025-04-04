// singleton
// object.create

//  object Literals

const mySym = Symbol("key1")

const jsObject = {
    name : "prince",
    "full name" : "choudhari",
    age : 36,
    [mySym]:"key123",
    location : "delhi", 
    isLoggedIn : false ,
    email : "prince@gmail.com" ,
};

console.log(jsObject.email)
console.log(jsObject["email"]);
console.log(jsObject["full name"])
// console.log(jsObject.full name) // wrong code
console.log(typeof jsObject[mySym])

jsObject.email= "orp@gmail.com"
// Object.freeze(jsObject)
jsObject.email= "orlkdmvcmp@gmail.com"

console.log(jsObject)

jsObject.greeting = function(){
    console.log("hello js Player")
}

jsObject.greetingTwo = function(){
    console.log(`hello js Player ${this.name}`)
}

console.log(jsObject.greeting());
console.log(jsObject.greetingTwo());