let buttonClickMe = document.getElementById("click"); 
let imgt = document.getElementById("imgg");
let imgr = document.getElementById("imgr");
let p1 = document.getElementById("iLoveYou");
let about = document.getElementById("lovekarma");
// imgt.style.display ="none" ;
// imgr.style.display ="none" ;
p1.style.display ="none" ;

about.addEventListener("click", click1)
buttonClickMe.addEventListener("click", click2);

function click1() {
    p1.style.display="block"
}
function click2() {
    
    imgr.style.display="flex"; 

    imgt.style.display="flex"; 




}
