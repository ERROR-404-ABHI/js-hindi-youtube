"use strict";//treat all js code as newer version   
var sname="sonu";
console.log(sname);
console.log(typeof sname);//String

var sal=5000;
console.log(sal);
console.log(typeof sal);//number

var ismarried=true;
console.log(ismarried);
console.log(typeof ismarried);//boolean

var wife;
console.log(wife);
console.log(typeof wife);//undefined

var no_of_children=null;
console.log(no_of_children);
console.log(typeof no_of_children);//object

var excepted_sal=1n//2^53-1
console.log(excepted_sal);
console.log(typeof excepted_sal);//bigint
/*
number=>2^53-1(range)
bigint
String=" "
boolean=true/false
null=standalone value
undefined
symbol=unique
*/
console.log(typeof null);// object
console.log(typeof undefined);// undefined
// =================================================

//  in javascript there are two types of memories-Stack(Primitive) and Heap(Non-Primitive)
// stack-this memory passes a copy of the original data 
// Heap-in this memory the reference of the original data is passed;
let myname="AbhaySingh"
let anothername=myname;
anothername="Arun Sharma";
console.log(myname);
console.log(anothername);