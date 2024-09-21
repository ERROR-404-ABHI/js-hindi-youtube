/*========  Async and Await================
!async:
this keyword we have to use only before a function.
it will always return a promise.
either function return normal data  
*/
// case 1
// if a function returns noramal data it will wrap with a promise and it will return a promise.
// normal data====> wraping into a promise ===>returning a promise

async function displaydata() {
    return "hi hello how are you ....arun"
    
};
console.log(displaydata());

// case:2
// Promise==>wraps into a promise====>returns a promise.
let p=new Promise((resolve,reject)=>{
resolve("it's true");

});
async function displaydata() {
    return p;
    
};
console.log(displaydata());
// case:3 
// consuming while returning normal data
// async 
