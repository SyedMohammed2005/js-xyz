const user={
    username:"Syed Muhammad",
    price:1000,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
        
        

    }
}
 user.welcomeMessage()
user.username="SAM"
 user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username="syed"
//     console.log(this.username);
    
// }
// chai()



// const chai= ()=> {
//     let username="syed"
//     console.log(this);
    
// }   
// chai()

// const addtwo=(num1,num2)=> {
//     return num1+num2
// }


// const addtwo=(num1,num2)=> num1+num2

// const addtwo=(num1,num2)=> (num1+num2)


const addtwo=(num1,num2)=> ({username:"syed"})
console.log(addtwo(5,10));

// const myArray=[1,2,3,4,5]
// myArray.forEach()