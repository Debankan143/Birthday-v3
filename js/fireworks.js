const stars = document.getElementById("stars");
const fireworks = document.getElementById("fireworks");
const celebrate = document.getElementById("celebrateBtn");

/* Stars */

for(let i=0;i<220;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    star.style.animationDelay=Math.random()*2+"s";

    stars.appendChild(star);

}

/* Fireworks */

function createFirework(x,y){

    for(let i=0;i<180;i++){

        const dot=document.createElement("div");

        dot.className="firework";

        dot.style.left=x+"px";
        dot.style.top=y+"px";

        dot.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        dot.style.setProperty(
            "--x",
            (Math.random()*500-250)+"px"
        );

        dot.style.setProperty(
            "--y",
            (Math.random()*500-250)+"px"
        );

        fireworks.appendChild(dot);

        setTimeout(()=>dot.remove(),1600);

    }

}

/* Button */

celebrate.addEventListener("click",()=>{

    createFirework(
        window.innerWidth/2,
        window.innerHeight/2
    );

});

/* Automatic fireworks */

setInterval(()=>{

    createFirework(

        Math.random()*window.innerWidth,

        Math.random()*window.innerHeight*0.7

    );

},3500);