// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123hkk"
tinderUser.name = "prince"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "prince@gmail.com",
    fullName : {
        firstName: "prince",
        lastName: {
            Middlename:"choudhari"
        }
    }
}

// console.log(regularUser.fullName.lastName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    4: "ad",
    6: "bd"
}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign( {},obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

const user = [
    {
        id: "12345",
        email:"pri@gmail.com"
    },
    {
        id: "12345",
        email:"pri@gmail.com"
    },
    {
        id: "12345",
        email:"pri@gmail.com"
    },
    {
        id: "12345",
        email:"pri@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()



