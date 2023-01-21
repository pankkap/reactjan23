// ES Promise:
// Promise: It is a an object which return a future value, but right now
// Promises has three state
// 1. Pending state
// 2. Fullfill state
// 3. Reject State
// Promised are used for Communication with APIs.
// Promised is well suited for handling aysnchronous Operation

isCompleted = true;
let learnJs = new Promise((resolve, reject) => {

    // Pending State (add Delay)
  setTimeout(() => {
    if (isCompleted) {      // Api Call

      resolve("I have completed ReactJS Training");
    } else {
      reject("i have not completed React Training");
    }
  }, 3000);

});

// console.log(learnJs);
// Lets handle the promise (Consume the Promise)

learnJs
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
