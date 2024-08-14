const sounds = {
    boom: new Audio('sounds/boom.wav'),
    clap: new Audio('sounds/clap.wav'),
    hiHat: new Audio('sounds/hihat.wav'),
    kick: new Audio('sounds/kick.wav'),
    openHat: new Audio('sounds/openhat.wav'),
    ride: new Audio('sounds/ride.wav'),
    snare: new Audio('sounds/snare.wav'),
    tink: new Audio('sounds/tink.wav'),
    tom: new Audio('sounds/tom.wav')
};

// Event listeners for buttons
document.getElementById("BoomBtn").addEventListener("click", () => {
    sounds.boom.currentTime = 0;
    sounds.boom.play();
});
document.getElementById("ClapBtn").addEventListener("click", () => {
    sounds.clap.currentTime = 0;
    sounds.clap.play();
});
document.getElementById("hiHatBtn").addEventListener("click", () => {
    sounds.hiHat.currentTime = 0;
    sounds.hiHat.play();
});
document.getElementById("KickBtn").addEventListener("click", () => {
    sounds.kick.currentTime = 0;
    sounds.kick.play();
});
document.getElementById("openHatBtn").addEventListener("click", () => {
    sounds.openHat.currentTime = 0;
    sounds.openHat.play();
});
document.getElementById("rideBtn").addEventListener("click", () => {
    sounds.ride.currentTime = 0;
    sounds.ride.play();
});
document.getElementById("snareBtn").addEventListener("click", () => {
    sounds.snare.currentTime = 0;
    sounds.snare.play();
});
document.getElementById("tinkBtn").addEventListener("click", () => {
    sounds.tink.currentTime = 0;
    sounds.tink.play();
});
document.getElementById("tomBtn").addEventListener("click", () => {
    sounds.tom.currentTime = 0;
    sounds.tom.play();
});

// Event listeners for key presses
document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'a':
            sounds.boom.currentTime = 0;
            sounds.boom.play();
            break;
        case 's':
            sounds.clap.currentTime = 0;
            sounds.clap.play();
            break;
        case 'd':
            sounds.hiHat.currentTime = 0;
            sounds.hiHat.play();
            break;
        case 'f':
            sounds.kick.currentTime = 0;
            sounds.kick.play();
            break;
        case 'g':
            sounds.openHat.currentTime = 0;
            sounds.openHat.play();
            break;
        case 'h':
            sounds.ride.currentTime = 0;
            sounds.ride.play();
            break;
        case 'j':
            sounds.snare.currentTime = 0;
            sounds.snare.play();
            break;
        case 'k':
            sounds.tink.currentTime = 0;
            sounds.tink.play();
            break;
        case 'l':
            sounds.tom.currentTime = 0;
            sounds.tom.play();
            break;
        default:
            break;
    }
});
