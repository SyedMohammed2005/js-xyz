// dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myDate2 = new Date(2020,0,21,7,8,30);
console.log(myDate2.toDateString());
let myDate3 = new Date("2020-01-21T07:08:30Z");
console.log(myDate3.toDateString());
console.log(myDate2.getFullYear());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();
console.log(newDate.getTime());
console.log(Math.floor(newDate.getTime()/1000));
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleString('default', {weekday: 'long'});
console.log(newDate.toLocaleString('default', {month: 'long'}));
