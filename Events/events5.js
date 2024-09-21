let body=document.body;

let div=document.createElement("div");

div.style.cssText="height:200px;width:200px;border:solid";
body.append(div)

div.addEventListener("mouseover",changecolor);

function changecolor(){
    div.style.cssText +="background-color:blue"
}
div.removeEventListener("mouseover",changecolor);