//  object literals
// initializing a symbol
const mySym=Symbol("key1")
var a={
    name:"abhay",
    "full name":"Abhay Singh",
     // mySym:"Abhay",//if we declare like this the compiler takee it as a string not as a symbol
    [mySym]:"abhay",
    email:"singhabhay101003@gmail.com",
    mobile:8896768764,
    gender:"male",
    age:22,
    isloggedin:false,
    lastLoginDays:["monday","saturday "]
}
console.log(a.email );//dot notation
console.log(a["email"]);//square braces notation
console.log(a["full name"]);//we can't access the value with dot(.) notation written in string format.

// modifying values of an object
a.mobile=9956308745
console.log(a.mobile);

// to freeze the content of an object we use->Object.freeze(object reference)
// Object.freeze(a)
a.email="abhaysingh10@gmail.com"//it doesn't propagate any changes in the email
console.log(a.email)

//console.log(a);

a.greetings=function(){
   // console.log(`Hello js user ${`name`} `);//this will print a anonymous function
   
    // this keyword-this kewword is used to invoking the current invoking object
    console.log(`Hello js user ${this.name} `);
}
console.log(a.greetings);
