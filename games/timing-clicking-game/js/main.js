'use strict'

const Languages = {
    english: {
        subtitle: "Click on the right button at the right time.",
        pause: "Pause",
        left: "Left",
        right: "Right",
        keys: "Keys= (A); (Left Arrow);(D); (Right Arrow)\r\nYou can also use the mouse's left/right button on the circle."
    },
    portuguese: {
        subtitle: "Clique no botão certo no momento certo.",
        keys: "Teclas= (A); (Seta Esquerda);(D); (Seta Direita)\r\nVocê também pode usar o clique esquerdo/direito do mouse no círculo."
    }
}

var title = "Timing Clicking Game";
var version = "1.0";
var language= localStorage.getItem("tmclkgam-lang");
var requiredClick;
var registeredClick = undefined;
var clickStage;
var clickedAlready;
var count;
var ongoingGame;
var extraTime = [];
function start(doStart) {
    ongoingGame = doStart;
    requiredClick = undefined;
    count = localStorage.getItem("tmclkgam-count");
    clickStage = 0;
    clickedAlready = false;
    ongoingGame = true;
    extraTime = [250, 500, 750, 1000, 1250];
    requestAClick();
}
function update() {
    return // TODO
};
function requestAClick() {
    console.log("Requesting a click...");
    if (requiredClick != undefined && ongoingGame == false) {
        console.warn(`Couldn't request a click.
        requiredClick: ${requiredClick}; ongoingGame: ${ongoingGame}; clickedAlready: ${clickedAlready}`);
        try {
            console.log("Cleaning Interval...")
            clearInterval(timeCount);
        }
        catch {console.warn("Couldn't clean interval. Perhaps there was nothing to clean?")}
        return;  
    }
    if (Math.floor(Math.random() * 2) == 1) {requiredClick = "left"}
    else {requiredClick = "right"}
    console.log(`Click requested! Player must press ${requiredClick} button.`);
    var timeCount = setInterval(function() {
        console.log("Tick. timeCount interval.");
        console.log(ongoingGame)
        if (clickedAlready || !ongoingGame) {
            console.warn(`Ticking is supposed to stop.
            requiredClick: ${requiredClick}; ongoingGame: ${ongoingGame}; clickedAlready: ${clickedAlready}`);
            clickStage = 0;
            if (clickedAlready) {
                clickedAlready = false;
                requestAClick();
            }
            clearInterval(timeCount);
            return;
        }
        if (clickStage >= 4) {
            if (!ongoingGame) {
                console.warn("Tick interrupted by no ongoing game.");
                clickStage = 0;
                clickedAlready = false;
                clearInterval(timeCount);
                return;
            }
            if (clickedAlready) {
                console.warn("Player has clicked already!")
                clickStage = 0;
                clickedAlready = false;
                clearInterval(timeCount);
                return;
            }
            console.log("CLICK OVER");
            clickMoment(registeredClick);
            clickStage = 0;
            clearInterval(timeCount);
            return;
        }
        clickStage++;
    }, 500 + extraTime[Math.floor(Math.random() * 5)]);
};
function clickMoment(sentClick) {
        console.log(`Click Check Moment received: "${sentClick}" CLICK; Expected: "${requiredClick}" CLICK)`);
        if (sentClick == requiredClick) {
            console.log("CORRECT CLICK");
            count++
            localStorage.setItem("tmclkgam-count", count);
            clickedAlready = true;
            clearInterval(requestAClick.timeCount);
            update();
            requestAClick();
        }
        else {
            console.log("INCORRECT CLICK");
            ongoingGame = false;
            // TODO= Send player to main menu.
        }
        console.log("Undoing click requirement.")
        clearInterval(requestAClick.timeCount);
        requiredClick == undefined;
    }
function languageSwitch() {

};
function languageSetting() {
    switch(language) {
        case "english":
        default:
            document.getElementById("subtitle").textContent = Languages.english.subtitle;
            document.getElementById("pause").textContent = Languages.english.pause;
            document.getElementById("l-click").textContent = Languages.english.left;
            document.getElementById("r-click").textContent = Languages.english.right;
            document.getElementById("keys").textContent = Languages.english.keys;
            break;
        case "portuguese":
            document.getElementById("subtitle").textContent = Languages.portuguese.subtitle;
            document.getElementById("pause").textContent = Languages.portuguese.pause;
            document.getElementById("l-click").textContent = Languages.portuguese.left;
            document.getElementById("r-click").textContent = Languages.portuguese.right;
            document.getElementById("keys").textContent = Languages.portuguese.keys;
    }
}
function safetyCheck() {
    if (count == null || typeof(count) != "number") {
        count = 0;
        localStorage.setItem("tmclkgam-count", count);
    }
    if (language == null) {
        language = "english";
        localStorage.setItem("tmclkgam-lang", language);
        languageSetting();
    }
}
document.addEventListener('keydown', function(e) {
    // console.log(e.key);
    if (e.key == "ArrowLeft") {
        clickMoment("left")
    }
    else if (e.key == "ArrowRight") {
        clickMoment("right")
    }
    else {return}
})