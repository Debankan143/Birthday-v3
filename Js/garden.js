// ===========================
// Flower Garden
// ===========================

document.addEventListener("DOMContentLoaded",()=>{

const flowers=document.querySelectorAll(".flower");

const wishBox=document.getElementById("wishBox");

const wishText=document.getElementById("wishText");

flowers.forEach(flower=>{

flower.addEventListener("click",()=>{

wishText.innerHTML=flower.dataset.message;

wishBox.classList.add("show");

flower.animate([

{transform:"scale(1)"},

{transform:"scale(1.4) rotate(15deg)"},

{transform:"scale(1)"}

],{

duration:700

});

});

});

});