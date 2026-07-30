const loader = document.getElementById("loader");
const fill = document.querySelector(".loading-fill");

let progress = 0;

const interval = setInterval(() => {

    progress += 1;

    fill.style.width = progress + "%";

    if (progress >= 100) {

        clearInterval(interval);

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }

}, 25);