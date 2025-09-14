const descriptor=Object.getOwnPropertyDescriptor(Math,
    "PI");
 console.log(descriptor);
 
// console.log(Math.floor(Math.PI));

const chai ={
    name:"chai",
    price:200,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nahi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,
    "price"));

Object.defineProperty(chai,"price",{
    // writable:false,
 //   configurable:false, 
   enumerable:false,
//    iterable:false,
//     value:1000,
});
// console.log(Object.getOwnPropertyDescriptor(chai,"price"));

for (let  [key,value] of Object.entries(chai)){
    if(typeof value!=="function"){

    console.log(`${key}:${value} `);
  
    }  
    
    
}