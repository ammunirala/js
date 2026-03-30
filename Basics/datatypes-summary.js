// JavaScript is a dynamically typed language, meaning variable types are determined at runtime and can change during execution.

// primitive datatypes

//7 types : String, Number , Boolean , null , undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 6153636343n





//Reference (Non Primitive) data types : (Array, Objects, Functions)

// const heros = ["virat kohli", "modi ji", "dogga", "naagraj"]
// let myObj = {  
//   name : "ammu",
//   age : 25,


// }

// +++++++++++++++++++++++++++++++++++


// stack (Primitive) , Heap (Non- Primitive)

let myYoutubename = "Amresh.com" // stored in stack

let anotherName = "Nirala.com" // stored in stack

console.log(myYoutubename); // Amresh.com

console.log(anotherName);


let user1 = {
  email: "user@google.com",
  upi: "user@ybl"
}
let user2 = user1
user2.email = "amresh@google.com"

console.log(user1.email);
console.log(user2.email);



