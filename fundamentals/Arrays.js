//! arrays-
// an array is a collection os homogeneous and heterogeneous datatypes.
// javascript arrays are resizeable in nature

var ar=[10,20,30,40,50];
// console.log(ar);

var ar=["abhay",101,["java","html","css","javascript"],true,null];
console.log(ar);

// ! creation
// array can be created in two ways
// 1.array literals
var ar=[10,20,30,40,50];
console.log(ar);

// 2.by using new keyword
var ar=new Array(100,200,300,400,500);
var ar=new Array(10,20);
var ar=new Array(10);//we should not pass single element as a value 
// .it will consider as a length of an array
console.log(ar);

// modification
var ar=new Array(10,20,30,40);
console.log(ar);

ar[1]=290
ar[3]=600
console.log(ar);

// deletion - we have to use delete keyword to delete any element from the array
var ar=new Array(100,200,3000,4023,66673);

delete ar[1]
delete ar[3]
console.log(ar);

// ! Array methods
var ar=new Array(100,200,300,400,500);
console.log(ar);

// ? 1.pop -it will remove the element from last index
ar.pop();
console.log(ar);

// 2.push - it will add the element at last index
ar.push(1000);
console.log(ar);

// 3.shift()- it will remove the element from the starting(0th index) of the array.
var ar=new Array(100,200,300,400,500);
ar.shift();
console.log(ar);

// 4.unshift()- it will add the element at 0th index of the array.
var ar=new Array(100,200,300,400,500);
ar.unshift(2000);
console.log(ar);

// 5.isArray()-it will check the datatype is an array or not.
// it will return a boolean value
console.log(typeof ar);//object
console.log(Array.isArray(ar));//true

// 6.slice()- it will extract the sub array from the original array
// syntax:variable name.slice(SI,EI);
var ar=new Array(100,200,300,400,500);
console.log(ar);
console.log(ar.slice(1,4));

// 7.splice- it will modify the original array
// variable.splice(SI,no. of elements to delete,elements to add).

console.log(ar);
ar.splice(2,4,220,330);
ar.splice(2,5,null);
ar.splice(2,100,undefined,null,true);
console.log(ar);

// 8. includes();

var ar=new Array(100,200,300,400,500);
console.log(ar.includes(200));
console.log(ar.includes(20));

// 9.indexOf();

var ar=new Array(100,200,300,400,500);
console.log(ar.indexOf(200));
console.log(ar.indexOf(500));
console.log(ar.indexOf(600));

// 10. sort();
var ar=["nidhi","sonu","Pooja","jitendra","dharmendra"];
console.log(ar);
console.log(ar.sort());

var ar=[10,20,30,40,590,230,445,999];
console.log(ar.sort());
// if we wants to comapre between numbers we have to write a comaprefunction.
// and we have to pass a callback function
// ? case1
console.log(ar.sort(compareFn));

function compareFn(a,b){
    return b-a;
}
console.log(ar.sort((a,b)=>a-b));
console.log(ar.sort((a,b)=>b-a));

// 11.Reverse()

var ar=["abhay","anurag","pooja","shubham","zara"]
console.log(ar.sort().reverse());

// 12. Concat();
var ar=[10,20,30]
var ar2=[,40,50,60]
var ar3=[,70,80,90]
console.log(ar+ar2+ar3);

// ! Loops
// For in 
// For of
// ForEach()

// ? for in:- it will iterate through the indexing value
/* for(let iterator in variableName){
indexes
}    */

var arr=[10,20,30,40,50,60,70,80,90,100];
for(let i in arr){
    console.log(i);
}

// ?for of:-it will iterate through the values
/*
for(let iterator of variable name){
it will iterate through the  values present in the array
}
*/
var arr=[10,20,30,40,50,60,70,80,90,100];
for(let i of arr){
    console.log(i);
}
// foreach() method 
/*
it is a hof(higher order function).
it requires a callback to execute 
callback fn requires of two parameters
1st parameter indicates values
2nd parameter indicates indexing
*/
var arr=[10,20,30,40,50,60,70,80,90,100];
console.log(ar);
// case1:
// arr.forEach(iteratorFn);

// function iteratorFn(val,ind){
//     console.log(val,ind);
// }

// case 2:
// arr.forEach((a,b)=>{
//     console.log(arr);
// });

// case 2.1
arr.forEach((val,ind)=>console.log(val,ind));

// filter
/*
it will iterate through an array 
it is a HOF
it pre requires a callback function with a parameter for iterating
when to use:when we needs to iterate and to check condition simultaneously then we have to use 
filter()method.

*/
var marks=[35,56,89,76,27,33]
console.log(marks);

// ? case 1:
var newArray=[];
for(let i of marks){
    console.log(i);
    if(i>=35){
        console.log(i);
        newArray.push(i)
    }
}
console.log(newArray);
// ?case 2:
console.log(marks.filter(checkCondition));
function checkCondition(val){
    if(val
}

