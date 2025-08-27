const marvel_heros = ["Ironman","Spiderman","Hulk","Thor"]
const dc_heros = ["Superman","Batman","Flash","Wonder"]

//  marvel_heros.push(dc_heros );

// console.log(marvel_heros[3][1]);

//  const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);

const allheros=[...marvel_heros,...dc_heros]
console.log(allheros);

const another_array = [1,2,3,[4,5,6,],7,[8,9,[7,6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("syed"))
console.log(Array.isArray([1,2,3]))
console.log(Array.from("syed"))
console.log(Array.from({name:"syed"}))

let score1=100
let score2=200
let score3=300      

console.log(Array.of(score1,score2,score3));
