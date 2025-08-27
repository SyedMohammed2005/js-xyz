const score= 100;
console.log(score);

const balance= new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toFixed(5));

const otherNumber= 123.8834;
console.log(otherNumber.toPrecision(2));

const hundreds= 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++MATHS+++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-100));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,1,9,-3));
// console.log(Math.max(4,6,1,9,-3));
console.log(Math.random());
 console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*100));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);