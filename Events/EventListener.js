let body=document.body;

let h1=document.createElement("h1");
h1.innerHTML="web technology";

body.append(h1);
// Syntax:Element.addEventListener("eventname","callbackfn",use capture);

h1.addEventListener("click",()=>{
h1.style.color="white";
h1.style.backgroundColor="blue";})

h1.addEventListener("dblclick",()=>{
    h1.style.color="black";
    h1.style.backgroundColor="white";})

h1.addEventListener("mouseover",changeFont);
h1.addEventListener("mouseout",backToOriginal);

function changeFont(){
    h1.style.fontSize="50px";
}
function backToOriginal(){
    h1.style.fontSize="32px";
}