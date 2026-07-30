document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(".photo-card");

const viewer=document.getElementById("photoViewer");

const image=document.getElementById("viewerImage");

const caption=document.getElementById("viewerCaption");

const close=document.getElementById("closeViewer");

cards.forEach(card=>{

card.addEventListener("click",()=>{

image.src=card.querySelector("img").src;

caption.innerHTML=card.querySelector("span").innerHTML;

viewer.style.display="flex";

});

});

close.addEventListener("click",()=>{

viewer.style.display="none";

});

viewer.addEventListener("click",(e)=>{

if(e.target===viewer){

viewer.style.display="none";

}

});

});