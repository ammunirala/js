//array


const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr);
console.log(myArr.length);
console.log(myArr[0]);
console.log(myArr[myArr.length - 1]);

myArr[0] = 100
console.log(myArr);

const myHeroes = ["ironman", "spiderman", "thor", "hulk"]
console.log(myHeroes);
myHeroes[1] = "captain america"
console.log(myHeroes);

const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray2[2]);

myArray2.push(6);
myArray2.push(7);
myArray2.pop();
myArray2.unshift(0);
myArray2.shift();
console.log(myArray2);