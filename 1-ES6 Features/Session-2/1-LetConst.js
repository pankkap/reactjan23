// let and const are used to create variables in ES6
// var keyword to create variable in ES5

// We have three Scopes
// 1. Global Scope
// 2. Function Scope ES5
// 3. Block Scope ES6 using let, const keyword



// var age = 30 // global variable

// function sayHi()
// {
//     if(true)
//     {
//         const x = 10;
//         let message = "Welcome to ES6 Concepts"
//         // Block Variable
//         // x++;
//         // var keyword
//         // Function scope
//         console.log(message)
//         console.log(age)
//     }
//     var message = "Welcome to ES6 Concepts"
//     console.log(x)
//     console.log(message)
//     console.log(age)
// }
// // console.log(message)

// sayHi();


 //global variable
{
    const x = 10; // block variable
    console.log(x)
    // x++;
    console.log(x)
}
console.log(x)