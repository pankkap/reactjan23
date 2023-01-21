// ES5 Function

// Normal Function | named function
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

// Expression Function | variable Invoking Function | Anonymous Function
var sum = function (a, b) {
  return a + b;
};
console.log(sum(10, 20));

// ES6 arrow function | Single line function

// With Return Statement
// let sum1 = (a, b) => {
//   return a + b;
// };

// Without Return Statement and brackets { }
let sum1 = (a, b) => a + b;
console.log(sum1(20, 20));

let msg = () => console.log("This is arrow function");
msg();
