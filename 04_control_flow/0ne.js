// //       if _statement_1
// const isuserloggedin = true
// const temperature = 28


// if(temperature > 25) {
//     console.log("It's hot outside");
// }
// if (2==="2") {
//     console.log("executed");
    
// }
// console.log("not executed");


// const score= 200 
// if (score > 100) {
//     var power = "fly"
//     console.log(`you can ${power}`);
// }
// console.log(`user power is ${power}`); // error: power is not defined


const blscore = 400
// if (blscore > 300) console.log("test"),console.log("test2  ");

// if (blscore > 300) {
//     console.log("less than ")
// }else if (blscore > 200) {
//     console.log("more than 200");}
//     else if (blscore > 100) {
//         console.log("more than 100");   }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromfacebook = false

if (userloggedin && debitcard && 2==2) {
    console.log("you can buy");
}
if (userloggedin || loggedinfromgoogle || loggedinfromfacebook) {
    console.log("you have logged in");
}   