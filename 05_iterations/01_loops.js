//for

for (let i = 0; i<10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is the best number              ever");
    }
        
    // console.log(element);
    
    for (let i = 1; i <= 10; i++) {
        // console.log(`i outer loop value:${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`j inner loop value:${j}and i value is:${i}`);
        // console.log(i + '*' + j + '=' + i*j);

    }
        
    }
    
}
let myArray=["flashy","batman","superman","wonderwoman"];
console.log(myArray.length);

// for (let index = 0; index <myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


//break and continue
// f

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detected 5, skipping the iteration`);
        
        continue;      
           
    }
    console.log(`vlaue of i is ${index}`);
    
}