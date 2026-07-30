const button = document.getElementById("blowCandles");
const flames = document.querySelectorAll(".flame");
const message = document.getElementById("cakeMessage");

button.addEventListener("click", () => {

    flames.forEach((flame) => {
        flame.classList.add("off");
    });

    message.classList.add("show");

    button.innerHTML = "🎉 Candles Blown!";

    if (typeof launchConfetti === "function") {
        launchConfetti();
    }

});