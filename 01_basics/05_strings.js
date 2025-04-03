const name = "prince "
const repoCount = 50

// console.log(name + repoCount + "value" )

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("prince")

// console.log(gameName[0])
// console.log(gameName._proto_)

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = " prince"
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "smarttechhub.rf.gd"

console.log(url.replace('tt'),('_'))

console.log(url.includes('sunder'))

console.log(gameName.split('_'))

