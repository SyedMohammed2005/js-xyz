// primitive data types
// number, string, boolean, null, undefined, symbol

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);

// object - non-primitive data type
// array, function, date, object literal
const heros=['shaktiman','naagraj','doga']
const myObj={
    name:'shaktiman',
    age:500,
    isActive:true
}
const myfunc=function(){
    console.log('hello world');
    
}
myfunc();
console.log(typeof myfunc);