//------------- Identifiers - let, const & console.log-------------

// const Myname = "Sadiya"

let num = 5

// console.log(Myname)

// console.log(num)

num = 10

// console.log(num)


// -------------Data types-------------

// let myNum;
// console.log(myNum)
let boolvalue = true
let nullvalue = null
// console.log(boolvalue)
// console.log(nullvalue)

// Task'16

let age = 18
// console.log(age)  //18

const myName = "Amtul"  //Amtul(forgetting to add "")
// console.log(myName)

// -------------Array-------------

let arr = [1, 20, "John", "good"]
// console.log(arr)

let integerArray = [2, 5, 7, 9, 11]

// console.log(integerArray.length)
// console.log(integerArray[2])
// console.log(integerArray[1])
// console.log(integerArray[integerArray.length - 1])

// -------------Objects-------------

let person =
{
    Name:
    {
        firstName: 'Alica',
        lastName: 'Ben'
    },
    age: 25,
    city: 'hyderabad'
}

// console.log(person)

// -------------Arrays in Objects-------------

const student =
{
    Name: "Ben10",
    Age: 6,
    Courses:
        [
            {
                CourseName: "JS",
                CourseCredits: 3
            },
            {
                CourseName: "MERN",
                CourseCredits: 4
            }
        ]
}

// console.log(student.Courses)
// console.log(student.Courses[0])
// console.log(student.Courses[0].CourseName)

//  -------------Template Strings-------------

let myNamenew = "Sam"

// console.log(`Hello ${myNamenew}!`)


// ------------- Prompt & Alert-------------

//  const username = prompt('Enter your username: ')

// // console.log(username)

// alert(`Hello, ${username}`)

// -------------Operators-------------

let a = 7
let b = 3

//console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
a++
// console.log(a)
b--
// console.log(b) 

// -------------Comparators-------------

// console.log(3<4)
// console.log(3>4)
// console.log(3<=4)
// console.log(3>=4)
// console.log(3<=3)
// console.log(3=='3')//TRUE
// console.log(3==='3')//FALSE compares the data types also

// -------------Conditionals-------------

let weatherCondition = "Sunny"
let subCondition = "Too Hot"

if (weatherCondition === "Cloudy") {
    // console.log("Take the Umbrella")

}
else if (weatherCondition === "Rainy") {
    // console.log("Use the Umbrella")
}
else if (weatherCondition === "Sunny") {
    if (subCondition === "Too Hot") {
        // console.log("Use the Umbrella")
    }
    else {
        // console.log("Don't Use the Umbrella")
    }
}
// -------------Ternary Operator-------------

let result = (20 < 50) ? true : false
// console.log(result)

let message = (0 > 99) ? "Yes" : "No"
// console.log(message)

let Result = (3 > 5)
console.log(Result)
// Result ? console.log("Result is right"):console.log("Result is wrong")

// -------------Task-------------

const Age = prompt("enter age: ")

if (Age > 60) {
    console.log("Senoir Citizen")
}
else if (Age < 18) {
    console.log("Minor")
}
else {
    console.log("Adult")
}







