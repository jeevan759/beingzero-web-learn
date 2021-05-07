function color(){
    console.log("changed");
    
console.log("hello");
let x=document.getElementById("a");
let y=document.getElementById("b");
let z=document.getElementById("c");
let rgb= "rgb("+x.value+","+y.value+","+z.value+")";
document.getElementById("rgb").innerHTML=rgb;
document.getElementById("rgb").style.backgroundColor=rgb;
}
