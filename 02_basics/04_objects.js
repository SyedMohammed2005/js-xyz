// const tinderUser=new object();
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="syed";
tinderUser.age=20;
tinderUser.isLoggedIn=false;    

// console.log(tinderUser);
const regularUser={
    email:" some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"syed",
            lastname:"mohammed" 
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1={1:"a",2:"b" }
const obj2={3:"c",4:"d" }
const obj4={3:"c",4:"d" }
// const obj3={...obj1,...obj2,5:"e",6:"f"}
// const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4 }
//  console.log(obj3)    ;


const users=[
        {
            id:"123",
                email:" bhbff"
            
        },
           {
            id:"123",
                email:" bhbff"
            
        },
           {
            id:"123",
                email:" bhbff"
            
        },
    
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser) );
console.log(Object.values(tinderUser) );
console.log(Object.entries(tinderUser) );
console.log(tinderUser.hasOwnProperty("name") );
console.log(tinderUser.hasOwnProperty("isAdmin") );
console.log(Array.isArray(tinderUser) );
console.log(tinderUser.id) ;
console.log(tinderUser["age"]) ;
tinderUser.age=21;
console.log(tinderUser.age) ;

