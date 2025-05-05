const user ={
    userName : "prince",
    price : 999 ,

    welcomeMassage: function() {
        console.log(`${this.userName} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMassage()
user.userName = "sam"
user.welcomeMassage()

console.log(this)

// function chai() {
//     let userName = 'prince'
//     console.log(userName)

// }

// chai()

const chai = () => {
    let userName = 'prince'
    console.log(this)

}

chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2
// }

// const addTwo =(num1, num2) => num1 + num2

// const addTwo =(num1, num2) => (num1 + num2)

// const addTwo =(num1, num2) => ({userName: "aman"})
    

// console.log(addTwo(3, 7))

const myArray =[2,3,25,1,4,2]

// myArray.forEach()