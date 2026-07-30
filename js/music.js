const bgMusic = new Audio("assets/music/birthday.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.4;

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        bgMusic.play();

        musicBtn.innerHTML = "🔊 Music On";

        playing = true;

    } else {

        bgMusic.pause();

        musicBtn.innerHTML = "🔈 Music Off";

        playing = false;

    }

});