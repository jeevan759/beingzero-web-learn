
console.log("hello");

 var x=document.getElementById("a").value;
 var y=document.getElementById("b").value;
 var z=document.getElementById("c").value;
 
 console.log(x,y,z);
 x=parseInt(x);
 y=parseInt(y);
 z=parseInt(z);
 console.log(typeof x, typeof y, typeof z);
 document.getElementById("rgb").innerHTML="rgb(x,y,z)";
document.getElementById("rgb").style.backgroundColor="rgb(0,0,255)";
function on(){
    console.log("changed");

}