// We are interested to understand the concepts of Synchronous and Asynchronous

const { Children } = require("react");

console.log("Statement-1");
console.log("Statement-2");

var time = setInterval(() => {
//   var result = 0;
//   for (let i = 0; i <= 10000000000; i++) {
//     result += i;
//   }
//   console.log(result);
console.log("Hello Friends")
}, 2000);
// 3000 milisec = 1 sec
console.log("Statement-3");
console.log("Statement-4");
console.log("Statement-5");


clearInterval(time);
// Asynchronous Functio: contain callback which execute in the background.
// 1. setInterval(() => {

// }, interval);

// 2. setTimeout(() => {

// }, timeout);
