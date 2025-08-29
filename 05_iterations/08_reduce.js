const myNums=[1,2,3]

// const myTotal=muNums.reduce(function(acc,currval) {
//     console.log(`acc:${acc}and currval${currval}`);
    
//     return acc + currval
    
// },3)
// console.log(myTotal);

const myTotal=myNums.reduce((acc,crrval)=>acc+crrval,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
     {
        itemName:"phython course",
        price:1999
    },
     {
        itemName:"mobile dev course",
        price:5999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+ item.price,0)
console.log(priceToPay);


