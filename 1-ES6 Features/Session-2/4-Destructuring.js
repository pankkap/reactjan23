// Destructuring with array

let arr = [2,4,5,6,7,8]
// a = arr[0]
// b = arr[1]
// c = arr[2]
// d = arr[3]
// e = arr[4]
// f = arr[5]

// Destructing
// let [a,b,c,d,e,f] = arr
// console.log(d)

// Selective destructing
let [a,,,,,f] = arr

console.log(a)
console.log(f)


let person = {
    name:"sachin",
    age:30,
    city:"Delhi",
    email:"sachin@gmail.com"
}
// console.log(person.city)
// console.log(person.email)
// console.log(person.age)
// console.log(person.name)

let {name, city, email} = person
console.log(name)
console.log(city)
console.log(email)