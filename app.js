//------------- Identifiers - let, const & console.log-------------

// const Myname = "Sadiya"
// let num = 5

// console.log(Myname)
// console.log(num)

// num = 10
// console.log(num)


// -------------Data types-------------

// let myNum = 3;
// console.log(myNum)
// let boolvalue = true
// let nullvalue = null
// console.log(boolvalue)
// console.log(nullvalue)

// Task'16

// let age = 18
// console.log(age)  //18

// const myName = "Amtul"  //Amtul(forgetting to add "")
// console.log(myName)

// -------------Array-------------

// let arr = [1, 20, "John", "good"]
// console.log(arr)

// let integerArray = [2, 5, 7, 9, 11]

// console.log(integerArray.length)
// console.log(integerArray[2])
// console.log(integerArray[1])
// console.log(integerArray[integerArray.length - 1])

// -------------Objects-------------

// let person =
// {
//     Name: {
//         firstName: 'Alica',
//         lastName: 'Ben'
//     }

//     age: 25,
//     city: 'hyderabad'
// }

// / console.log(person)

// -------------Arrays in Objects-------------

// const student =
// {
//     Name: "Ben10",
//     Age: 6,
//     Courses:
//         [
//             {
//                  CourseName: "JS",
//                 CourseCredits: 3
//             },
//             {
//                 CourseName: "MERN",
//                 CourseCredits: 4
//             }
//         ]
// }

// console.log(student.Courses)
// console.log(student.Courses[0])
// console.log(student.Courses[0].CourseName)

//  -------------Template Strings-------------

// let myNamenew = "Sam"

// console.log(`Hello ${myNamenew}!`)



// ------------- Prompt & Alert-------------

// const username = prompt('Enter your username: ')

// console.log(username)

// alert(`Hello, ${username}`)

// -------------Operators-------------

// let a = 7
// let b = 3

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// a++
// console.log(a)
// b--
// console.log(b)

// -------------Comparators-------------

// console.log(3 < 4)
// console.log(3 > 4)
// console.log(3 <= 4)
// console.log(3 >= 4)
// console.log(3 <= 3)
// console.log(3 == '3')//TRUE
// console.log(3 === '3')//FALSE compares the data types also

// -------------Conditionals-------------

// let weatherCondition = "Sunny"
// let subCondition = "Too Hot"

// if (weatherCondition === "Cloudy") {
//     console.log("Take the Umbrella")

// }
// else if (weatherCondition === "Rainy") {
//     console.log("Use the Umbrella")
// }
// else if (weatherCondition === "Sunny") {
//     if (subCondition === "Too Hot") {
//         console.log("Use the Umbrella")
//     }
//     else {
//         console.log("Don't Use the Umbrella")
//     }
// }
// -------------Ternary Operator-------------

// let result = (20 < 50) ? true : false
// console.log(result)

// let message = (0 > 99) ? "Yes" : "No"
// console.log(message)

// let Result = (3 > 5)
// console.log(Result)
// Result ? console.log("Result is right") : console.log("Result is wrong")

// -------------Task-------------

// const Age = prompt("enter age: ")

// if (Age > 60) {
//     console.log("Senoir Citizen")
// }
// else if (Age < 18) {
//     console.log("Minor")
// }
// else {
//     console.log("Adult")
// }

// -------------JS false values-------------

// let bool = 0

// if (bool) {
//     console.log("bool is true")
// }
// else {
//     console.log("bool is false")
// }

// -----------Logical Operators----------

// let a1 = 0
// let a2 = ''
// if (a1 || a2) {
//     console.log("hi")
// }

// let b1 = 2
// let b2 = 0
// if (b1 && b2) {
//     console.log("bye")
// }

// ------------Loops-----------
// for loop------

// for (i = 0; i < 5; i++) {
//     console.log(i)
// }

// let arr1 = [43, 4, 67, 89, 90]

// print all the elements of the array

// for (i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }

// // outcome
// 43
// 4
// 67
// 89
//  90

// while loop---------//we use this when we don't know how many times to loop



// let rand = Math.random()// this will generate a number between 0 and 1
// console.log(rand)

// while (rand > 0.5) {
//     console.log('the number is greater than 0.5')
//     rand = Math.random() // Update the rand variable inside the loop to get a new random number
//     console.log(rand)
// }

// task---(factorial of a number)
// let n = prompt('Enter a Number:')
// console.log(n)
// let fact =1

// for (i = 1; i <= n; i++) {
//     fact = fact * i
// }
// console.log(fact)

// ------------*FUNCTIONS*--------------

// const printNAME = (name) => {
//     console.log(name)
// }

// printNAME('sam')

// const printNameNew = (name) => {
// console.log("name")
// }
//  console.log("puma")


// const consolelogfn = () => {
//     console.log("this is a console.log statement")

// }

// const returnValuefn = () => {
//     return " this is a return statement "
// }

// consolelogfn()

// let returnValue = returnValuefn()

// //***/ returnValue = this is a return statement

// console.log(returnValue)


// ----Early return -----
// const fun = () => {
//     console.log('1')
//     return true
//     console.log('2')

// }
// console.log(fun())

// task 1 using arrow function--------

// const printLenght = () => {
// const username = prompt('enter your name')
// console.log(username.length)
// }
// printLenght() // ***calling the function

// task 2 --------------(returning)

const sumFun = (a, b) => {
    return a + b
}

// console.log(sumFun(5, 4))

//********* */ CALLBACK FUNCTION ********
// functions which are parameters of other functions
// const cFun = () => {
//     console.log("sum printed")
// }

// const pfun = (x, y, fun) =>{
// console.log(x+y)
// fun()
// }

// pfun(5,4,cFun)

// task callback function

// const printAge = (age) => {
//     console.log(age)
// }

// const isageOdd = (age, callBack) => {
//     if (age % 2 !== 0) {
//         callBack(age)
//     }
//     else {
//         console.log("even")
//     }
// }
// isageOdd(4, printAge)
// isageOdd(5, printAge)


//   let j = 9 // =>>global scoped 
// if (true) {
//     const k = 5  //=>> local scoped --bolock scoped
//     console.log(k)
//     console.log(j)
// }

// console.log(k) 

// **ASSIGNMENT**
1. BASIC FUNCTION CREATION

const greet =(name) =>{
    console.log(`Hello, ${name}`)
}
greet("Alice")

2. Temperature Conversion

 const celsiusToFahrenheit =( tempCelcius)=>{
    console.log(tempCelcius*(9/5) + 32)
 }
 celsiusToFahrenheit(40)

//  3.Even or Odd Checker

const isEven =(positiveInt) =>{
    if (positiveInt%2== 0)
    {
        return true
    }
    else{
        return false
    }

}
 console.log(isEven(6))

4. Factorial Calculator
i
const factorial = (int) => {
    let fact = 1
    for (i = 1; i <= int ; i++) {
        fact = fact * i

    }
    return fact

}
console.log(factorial(4))

without return stmt

ii

const factorial=(int)=>{
    let fact =1
    for (i=1; i<=int; i++)
    {
        fact=fact*i
    }
    console.log(fact)
}
factorial(4)











