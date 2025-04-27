const marvel_heroes = ["ironman" , "antman" , "spiderman"]
const dc_heroes = ["man" , "ant" , "spider"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

// const newArray = marvel_heroes.concat(dc_heroes) // we can use only two variable array

// console.log(newArray)

const new_heroes = [...marvel_heroes,...dc_heroes]; // we can use multiple variable array
console.log(new_heroes);

const new_number =[1,2,3, [ 3,5,6], 8 ,[5 , 4 ,[4,5,6]]] ;
const real_number = new_number.flat(Infinity)

// console.log(real_number)


// console.log(Array.isArray("prince"))
// console.log(Array.from("prince"))
// console.log(Array.from({name : "prince"}))  //intesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3))