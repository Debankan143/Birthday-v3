function restartExperience(){

    // Hide ending screen
    document.getElementById("endingScreen").classList.remove("show");

    // Scroll to top
    window.scrollTo({
        top:0,
        behavior:"instant"
    });

    // Restart page
    setTimeout(()=>{
        location.reload();
    },300);

}
