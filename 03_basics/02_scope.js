
let a = 300

if (true) {
let a = 10
const b = 20
// var c = 30 (we don't use var in coding because var cannot content variable properly)

console.log("inner: " ,a)
}

console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "prince"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    // two()
}

// one()

if (true) {
    const username = "prince"
    if (username === "prince") {
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



console.log(addone(5))
function addone(num) {
    return num + 1
}



const addtwo = function (num) {
    return num + 1
}

addtwo(5)