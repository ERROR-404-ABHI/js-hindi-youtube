// event propogation is a process of traversing through the elements through DOM elements.
let h1tagOne=document.getElementById("h1tagOne");

function fun1(){
    h1tagOne.style.font="40px"
   
}
function fun2(){
    h1tagOne.style.background="green";
    h1tagOne.style.color="black"
}
h1tagOne.addEventListener("click",fun1)
h1tagOne.addEventListener("click",fun2)

let gp=document.getElementById("grandparent");
let p=document.getElementById("parent");
let c=document.getElementById("child");

// event bubbling
gp.addEventListener("click",()=>{
    alert("grand parent click button is triggered"),true
});
p.addEventListener("click",()=>{
    alert(" parent click button is triggered")
});
c.addEventListener("click",()=>{
    alert(" child click button is triggered")
});