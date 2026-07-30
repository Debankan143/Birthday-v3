const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox.addEventListener("click", () => {

    giftBox.classList.add("open");

    giftMessage.classList.add("show");

    if(typeof launchConfetti === "function"){

        launchConfetti();

    }

    if(typeof createFirework === "function"){

        createFirework(window.innerWidth/2,250);

    }

});