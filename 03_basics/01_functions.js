function sayMyName() {
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("n");
    console.log("c");
    console.log("e");
}

sayMyName()

// function twoNumber(number1, number2) {

//     console.log(number1 + number2)
// }

function twoNumber(number1, number2) {
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = twoNumber(3, 5)

console.log("result ", result);

function loginUserMassage(username) {
    // if (username === undefined) {
    //     console.log("please enter your user name")
    //     return
    // }
    if (!username) {
        console.log("please enter your user name")
        return
    }
    return `${username} is logged In `;
}

// console.log(loginUserMassage("prince"))
console.log(loginUserMassage());

function cartCalculater(val1, val2 ,...num1) {
    return num1
}

console.log(cartCalculater(2, 4 ,6, 10,20))


const user  = {
    userName: "prince",
    price : 155,
}

function handleObject(anyObject) {
    console.log(`userName is ${anyObject.userName} and Price is ${anyObject.price} `)
}

// handleObject(user)

handleObject({
    userName: "ffghj",
    price: 45
})

const myNewArrey = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArrey))
console.log(returnSecondValue([200, 400, 500 , 600]))
