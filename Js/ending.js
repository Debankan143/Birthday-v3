const ending = document.getElementById("endingScreen");

window.addEventListener("scroll",()=>{

    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){

        ending.classList.add("show");

    }

});

document.getElementById("watchAgain").addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    ending.classList.remove("show");

});