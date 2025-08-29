// const coding=["java","phython","c++","c","ruby","javascript"]

// const values=coding.forEach((item)=>{
// // console.log(item);
// return item

// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNmus =myNums.filter( (num)=> {
//     return num>4
// });

// const newNums=[]
// myNums.forEach((num) => {
//     if (num>4) {
//         newNums.push(num)
//     }

// })
// console.log(newNums);

const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'book two', genre: ' non fiction', publish: 1991, edition: 2006}, 
    { title: 'book three', genre: 'history', publish: 1921, edition: 2003}, 
    { title: 'book four', genre: 'sciencefiction', publish: 1941, edition: 2014 },
    { title: 'book five', genre: 'fiction', publish: 2001, edition: 2005},
    { title: 'book six', genre: 'history', publish: 1995, edition: 2000 },
    { title: 'book seven', genre: 'xfiction', publish: 2005, edition: 2014 }
];

let userBooks = books.filter((bk) => bk.genre === 'history');


userBooks = books.filter((bk) => {return bk.publish >= 1995 && bk.genre==="history"})

console.log(userBooks)



