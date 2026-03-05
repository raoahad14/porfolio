// typing
const text=["Frontend Developer","Web Designer","UI Creator"];
let i=0,j=0,current="",del=false;

function type(){
  current=text[i];
  document.getElementById("typing").textContent=current.substring(0,j);

  if(!del && j++===current.length){del=true;setTimeout(type,1000);return;}
  if(del && j--===0){del=false;i=(i+1)%text.length;}
  setTimeout(type,70);
}
type();

// scroll reveal
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-80){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll",reveal);
reveal();

// scroll btn
function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}
