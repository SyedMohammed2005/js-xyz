// function calculatorCartPrice(val1,val2, ...num1){
    // return n

// }
// console.log(calculatorCartPrice(100,200,300,400));

const user={
    username:"syed",
    price:400
}
function handleObject(anyobject){
    console.log(`usser name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"ali",
    price:500
})

const myNewArray=[100,200,300,400,500];

function returnSecondVlaue(getArray){
    return getArray[1];
}
console.log(returnSecondVlaue(myNewArray));
console.log(returnSecondVlaue([10,20,30,40,50]));