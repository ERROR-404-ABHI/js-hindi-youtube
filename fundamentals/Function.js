// callstack 
// case 1
// console.log("start");
// var a=10;
// console.log(a);

// var b=20;
// console.log(b);

// function sum(){
//     var x=5;
//     var y=10;
//     return x+y;
// }

//     var c=30;
//     console.log(c);

//     var d=40;
//     console.log(d);

//     console.log(sum);
//     console.log("end");

    // case 2
    // console.log("start");
    // var a=10;
    // console.log(a);

    // var b=20;
    // console.log(b);


    // var add function(){
    //     var x=5;
    //     var y=10;
    //     return x+y;

    // }
    // var c=30;
    // console.log(c);

    // console.log(add());
    // var d=40;
    // console.log(d);
    // console.log("end");

    // case 3
    // console.log("start");
    // function Cal(a,b,operation){
    // return operation(a,b)
    // }
    // function sum(a,b)
    // {
    // return a+b;
    // }

    // console.log(sum(100,200));
    
    // function sub(a,b){
    //     return a-b;

    // }
    // console.log(sub(300,200));

    // console.log("sum",Cal(10,20,sum));
    // console.log("sub",Cal(10,20,sub));


    // console.log("end");

function Name(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("Y");

}
//Name    Reference name
// calling a function
Name();

function AddTwoNum(number1,number2){
//    console.log(number1+number2); 
// let result=number1+number2
//  return result;
return number1+number2
}

const result=AddTwoNum(4,5);
console.log("result:",result);

function loginusermessage(username){
    if(username===undefined){
        console.log("please enter a valid username");
        return

    }
    return `${username} just logged in`;
}
// console.log(loginusermessage("abhay singh"));
 console.log(loginusermessage());//if we pass an empty parenthesis in function call then it will print undefined









