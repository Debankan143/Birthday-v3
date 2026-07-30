// ======================================
// Birthday Website V3.0
// Main JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    hideLoader();

    setupStartButton();

    createPetals(25);

    createClouds();

    createButterflies();

    setupFlowers();

    setupGift();

    createNightSky();

    startTypewriter();

});


// ======================================
// Loader
// ======================================

function hideLoader(){

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.transition="1s";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);

    },2500);

}



// ======================================
// Start Journey
// ======================================

function setupStartButton(){

    const btn=document.getElementById("startJourney");

    btn.addEventListener("click",()=>{

        document.getElementById("teddy")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}



// ======================================
// Falling Petals
// ======================================

function createPetals(total){

    for(let i=0;i<total;i++){

        let petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDuration=
        (6+Math.random()*8)+"s";

        petal.style.animationDelay=
        Math.random()*5+"s";

        document.body.appendChild(petal);

    }

}



// ======================================
// Clouds
// ======================================

function createClouds(){

    for(let i=0;i<4;i++){

        let cloud=document.createElement("div");

        cloud.className="cloud";

        cloud.innerHTML="☁️";

        cloud.style.top=(50+i*80)+"px";

        cloud.style.animationDuration=
        (35+i*5)+"s";

        document.body.appendChild(cloud);

    }

}



// ======================================
// Butterflies
// ======================================

function createButterflies(){

    for(let i=0;i<6;i++){

        let butterfly=document.createElement("div");

        butterfly.className="butterfly";

        butterfly.innerHTML="🦋";

        butterfly.style.top=
        (100+i*70)+"px";

        butterfly.style.animationDelay=
        i+"s";

        document.body.appendChild(butterfly);

    }

}



// ======================================
// Flower Wishes
// ======================================

const wishes=[

"🌸 Stay happy forever.",

"❤️ Keep smiling every day.",

"✨ May all your dreams come true.",

"🌷 You are truly amazing.",

"🎂 Happy Birthday!"

];

function setupFlowers(){

    const flowers=document.querySelectorAll(".flower");

    flowers.forEach((flower,index)=>{

        flower.addEventListener("click",()=>{

            alert(wishes[index]);

        });

    });

}



// ======================================
// Gift Box
// ======================================

function setupGift(){

    const gift=document.getElementById("openGift");

    gift.addEventListener("click",()=>{

        alert("🎉 Surprise! Wishing you a lifetime of happiness ❤️");

    });

}



// ======================================
// Night Sky
// ======================================

function createNightSky(){

    const night=document.getElementById("night");

    for(let i=0;i<70;i++){

        let star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=
        Math.random()*4+"s";

        night.appendChild(star);

    }

}



// ======================================
// Typewriter Effect
// ======================================

function startTypewriter(){

    const letter=document.getElementById("typewriter");

    const text=letter.innerText;

    letter.innerHTML="";

    let i=0;

    function typing(){

        if(i<text.length){

            letter.innerHTML+=text.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}