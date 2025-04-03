const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1));

const otherNumber = 123.8699

console.log(otherNumber.toPrecision(4));

const hundrand = 10000000
console.log(hundrand.toLocaleString('en-in'));

// +++++++++++++++++  Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //ads makes numder in positive but not negitive
console.log(Math.round(4.2)); // round gives roundof value  value is 4
console.log(Math.ceil(4.1));  // ceil can give value next numder 4 = 4   4.2 = 5
console.log(Math.floor(4.9)); // Floor give same value 4.9 = 4.9
// console.log(Math.min( 4, 5 , 6 , 8));
// console.log(Maths.max(4, 5,  6, 8))

// console.log(Math.random);
// console.log((Maths.random()*10) + 1);
// console.log((Maths.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min + 1)) + min);

