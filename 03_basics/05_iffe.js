// immediately invoked function expression(IIFE)

(function chai(){
    //named iffe
    console.log(`db connected`);
})
();
    //unnamed iffe
( (name)=>{
    console.log(`db connected1 ${name}`  );
})(`syed`)
