function sayMyName(){
    console.log("S");
    console.log("Y");
    console.log("E");               
    console.log("D");
    
}

// // sayMyName();
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result=addTwoNumbers(10, 5);
// console.log(result);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
  
}
const result = addTwoNumbers(10, 5);
// console.log("result:",result);



function loginUserMessage(username="syed"){
    if(username === undefined){
        return "Please enter a username";

    }

    return`${username} just logged in`;
}
// console.log(loginUserMessage("syed"))
console.log(loginUserMessage());
