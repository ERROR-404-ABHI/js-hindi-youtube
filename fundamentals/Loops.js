let body=document.body;

let h1=document.createElement("h1");
h1.innerHTML="web technology";
body.append(h1);

console.log(h1);
h1.onclick=fun1;
function fun1(){
    alert("event is triggered")

}
h1.onmouseover=fun2;
function fun2(){
    h1.style.color="tomato";
    h1.style.color="golden";

}
h1.onmouseout=fun3;
function fun3(){
    h1.style.color="black";
    
}