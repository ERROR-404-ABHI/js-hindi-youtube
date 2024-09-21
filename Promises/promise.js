/*let p = new Promise((resolve, reject) => {
    var isplaced = false;

    if (isplaced) {
        resolve("placed")
    }
    else {
        reject("not placed");

    }
});
console.log(p);

p.then((res) => {
    console.log("then()method will work only if the promisegot fuffilled. ");
    console.log(res);

});
p.catch((res) => {
    console.log("catch() method will work only if the promisegot rejected. ");
    console.log(res);

});

p.finally((res) => {
    console.log("finally() method will work whether the promise is resolved or rejected. ");
    console.log(res);

});*/

// ! methods of promise
let abhay = new Promise((resolve, reject) => {
    var isplaced = false;
    setTimeout(()=>{
    if (isplaced) {
        resolve("abhay is placed")
    }
    else {
        reject("abhay is not placed");

    }
  },6000);
});
let anurag = new Promise((resolve, reject) => {
    var isplaced = false;
setTimeout(()=>{
    if (isplaced) {
        resolve("anurag is placed")
    }
    else {
        reject("not placed");

    }
  },8000); 
});
let arun = new Promise((resolve, reject) => {
    var isplaced = true;

    if (isplaced) {
        resolve(" arun is placed")
    }
    else {
        reject("arun is not placed");

    }
});
let anika = new Promise((resolve, reject) => {
    var isplaced = true;

    if (isplaced) {
        resolve("anika is placed")
    }
    else {
        reject("not placed");

    }
});

// Promise.any([abhay,anurag,arun,anika]).then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
    
// });
Promise.all([abhay,anurag,arun,anika]).then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
// Promise.allSettled([abhay,anurag,arun,anika]).then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
    
// });
// Promise.race([abhay,anurag,arun,anika]).then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
    
// });



