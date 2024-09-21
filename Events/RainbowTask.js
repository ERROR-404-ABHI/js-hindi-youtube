// 2nd way

let body=document.body;
let section =document.createElement("section");
section.style.cssText="display:flex;height:100vh";
body.append(section);

let data=["red","orange","yellow","green","blue","indigo","violet"];
for(let color of data){
    console.log(color);

    let div=document.createElement("div");
    console.log(div);

    // div.innerHTML=color;
    div.style.cssText +="height:100%;flex:1";
    section.append(div);

    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor=color;
    })
    
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="white";
    })



}