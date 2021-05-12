let field= document.getElementById("submit");
let add=document.getElementById("add");
let div=document.getElementById("p");
 add.addEventListener("click",function(){
     
     var para=document.createElement("p");
     para.innerText=field.value;
     div.appendChild(para);
          field.value="";
     para.addEventListener("click",function(){
        //  para.style.textDecoration ='line-through';
        para.style.textDecoration="line-through";
        para.addEventListener("click",function(){
            //  para.style.textDecoration ='line-through';
            div.removeChild(para);
         })
     })



 })