// ArrayS

const myArr = [0 ,1 ,2 ,3 ,4 ];
const myHeroes = ["Ironman", "spiderman" , "batman"];

const arr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// Array Methods

myArr.push(9) // add to end any number, Strings etc
myArr.pop()  // delete to end any number, Strings etc
myArr.unshift("prince") // add to start any number, Strings etc
myArr.shift() //Delete to start any number, Strings etc

// myArr.includes(9)
// myArr.indexOf(3)
console.log(myArr.indexOf(3))

const newArr = myArr.join()

console.log(newArr)
console.log(typeof newArr)

// Slice and Splies

console.log("A", myArr); //[ 0, 1, 2, 3, 4 ]


const myn1 = myArr.slice(1, 3);

console.log(myn1); //[ 1, 2 ]
console.log("B", myArr); // [ 0, 1, 2, 3, 4 ]

const myn2 = myArr.splice(1,3)
console.log("c",myArr) // [0 , 4]
console.log(myn2); // [1,2,3]


