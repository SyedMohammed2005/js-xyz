let score="33aa"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);
// "33"=>33
// "33aa"=>NaN
// true=>1
// false=>0
// null=>0
// undefined=>NaN
// {}=>NaN
// []=>0
// [3,4]=>NaN
// [3]=>3
// ["33"]=>33
let soomeNumber=33
let stringNumber=String(soomeNumber);
console.log(typeof stringNumber);