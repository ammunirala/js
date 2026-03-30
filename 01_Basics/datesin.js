//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate); //date is object 

let myCreatedDate = new Date(2026, 2, 30)
let myCreatedDate2 = new Date(2026, 2, 30, 13, 45, 20)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate5 = new Date("2023-02-30")
console.log(myCreatedDate5.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/100000));

let newDate = new Date()
console.log(newDate.getDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getTime());

