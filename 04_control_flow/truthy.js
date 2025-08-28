const useremail=[]
    if(useremail){
    console.log("Condition is true");
}   
else{
    console.log("Condition is false");
}

// falsy vlaues
// false,0,-0,Bigint on"",undefined,NaN


//truthy vlaues
//"0"," ",[],{},function(){},new Date()

// if(useremail.length===0){
    // console.log("array is empty");
// }


// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("object is empty");
// }

//nullish coalescing operator(??):null undinfined

let val1;
// val1 =5??10
// val1 =null??10
val1 =undefined??10

console.log(val1)

//ternary operator
// condition ? true : false
const teaprice=200
teaprice <=80 ? console.log("less than 80"):console.log;

