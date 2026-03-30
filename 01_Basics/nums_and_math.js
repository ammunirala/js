// ++++++++++++ Numbers +++++++++++++=

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 125.85652
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

Number.MAX_VALUE
Number.MIN_VALUE
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN

const result = 100 / 'apple'
console.log(result);
console.log(Number.isNaN(result));


// +++++++++++ Math +++++++++

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); // higher
console.log(Math.floor(4.7)); //lower
console.log(Math.max(1, 5, 3, 9));
console.log(Math.min(1, 5, 3, 9));
console.log(Math.random()); // middle of zero and 1
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.SQRT1_2);
console.log(Math.PI);






