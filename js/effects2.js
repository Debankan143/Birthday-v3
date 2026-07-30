/* ===============================
        CLOUDS
================================ */

const cloudContainer = document.getElementById("cloudContainer");

function createCloud(){

    const cloud = document.createElement("div");

    cloud.className = "cloud";

    cloud.innerHTML = "☁️";

    cloud.style.top = Math.random()*40 + "%";

    cloud.style.animationDuration = (25 + Math.random()*20) + "s";

    cloudContainer.appendChild(cloud);

    setTimeout(()=>cloud.remove(),45000);

}

setInterval(createCloud,6000);


/* ===============================
        BUTTERFLIES
================================ */

const butterflyContainer = document.getElementById("butterflyContainer");

function butterfly(){

    const b=document.createElement("div");

    b.className="butterfly";

    b.innerHTML="🦋";

    b.style.top=Math.random()*70+"%";

    b.style.animationDuration=(10+Math.random()*10)+"s";

    butterflyContainer.appendChild(b);

    setTimeout(()=>b.remove(),22000);

}

setInterval(butterfly,2500);


/* ===============================
        PETALS
================================ */

const petalContainer=document.getElementById("petalContainer");

function petal(){

    const p=document.createElement("div");

    p.className="petal";

    p.innerHTML="🌸";

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=(6+Math.random()*4)+"s";

    petalContainer.appendChild(p);

    setTimeout(()=>p.remove(),10000);

}

setInterval(petal,500);


/* ===============================
        HEARTS ON CLICK
================================ */

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.getElementById("heartContainer").appendChild(heart);

    setTimeout(()=>heart.remove(),1800);

});