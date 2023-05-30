'use strict'

const Languages = {
    english: {
        subtitle: "Click on the right button at the right time.",
        pause: "Stop",
        reset: `Reset (${resetProgress}/10)`,
        left: "Left",
        right: "Right",
        keys: "Keys= (A); (Left Arrow);(D); (Right Arrow)\r\nYou can also use the mouse's left/right button on the circle."
    },
    portuguese: {
        subtitle: "Clique no botão certo no momento certo.",
        pause: "Parar",
        reset: `Reiniciar (${resetProgress}/10)`,
        left: "Esquerda",
        right: "Direita",
        keys: "Teclas= (A); (Seta Esquerda);(D); (Seta Direita)\r\nVocê também pode usar o clique esquerdo/direito do mouse no círculo."
    },
    updateLanguage: function() {
        this.english.reset = `Reset (${resetProgress}/10)`;
        this.portuguese.reset = `Reiniciar (${resetProgress}/10)`;
    }
}

var title = "Timing Clicking Game";
var version = "1.0";
var language = localStorage.getItem("tmclkgam-lang");
var requiredClick;
var registeredClick = undefined;
var clickStage = 0;
var resetProgress = 0;
var clickedAlready;
var count;
var ongoingGame;
var extraTime = [];
function widgetSwitch(screenToHide, screenToShow) {
    document.getElementById(screenToHide).style.display = "none";
    document.getElementById(screenToShow).style.display = "inline";
}
function start() {
    if (clickStage != 0) {
        setTimeout(start, 200);
        return;
    }
    requiredClick = undefined;
    count = parseInt(localStorage.getItem("tmclkgam-count"));
    update(true);
    widgetSwitch("menu", "game");
    clickStage = 0;
    clickedAlready = false;
    ongoingGame = true;
    extraTime = [250, 500, 750, 1000, 1250];
    requestAClick();
}
function stopGame() {
    ongoingGame = false;
    widgetSwitch("game", "menu");
    clearInterval(requestAClick.timeCount);
}
function update(resetBars) {
    if (resetBars) {
        document.getElementById("left-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 1%, #00f 1%, #00f 100%`
        document.getElementById("right-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 1%, #00f 1%, #00f 100%`
    }
    localStorage.setItem("tmclkgam-count", count);
    document.getElementById("counting").textContent = count;
    if (clickedAlready) return;
    let clickStageCount = 40 * clickStage + 5;
    if (requiredClick == "left") {
        document.getElementById("left-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 ${clickStageCount}%, #00f 1%, #00f 100%`
        document.getElementById("right-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 1%, #00f 1%, #00f 100%`
    }
    else if (requiredClick == "right") {
        document.getElementById("right-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 ${clickStageCount}%, #00f 1%, #00f 100%`
        document.getElementById("left-bar").style.background = `linear-gradient(to right, #f00 0%, #f00 1%, #00f 1%, #00f 100%`
    }
}
function resetGame() {
    if (resetProgress >= 10) {
        resetProgress = 0;
        count = 0;
        update(true);
    }
    else resetProgress++;
    languageSetting();
}
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
        update();
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
        count++;
        clickedAlready = true;
        update(true);
        clearInterval(requestAClick.timeCount);
    }
    else {
        console.log("INCORRECT CLICK");
        stopGame();
    }
    console.log("Undoing click requirement.");
    clearInterval(requestAClick.timeCount);
    requiredClick == undefined;
}
function languageSwitch(setLanguage) {
    language = setLanguage;
    localStorage.setItem("tmclkgam-lang", language);
    languageSetting();
};
function languageSetting() {
    Languages.updateLanguage();
    switch(language) {
        case "eng":
        default:
            document.getElementById("subtitle").textContent = Languages.english.subtitle;
            document.getElementById("pause").textContent = Languages.english.pause;
            document.getElementById("reset").textContent = Languages.english.reset;
            document.getElementById("l-click").textContent = Languages.english.left;
            document.getElementById("r-click").textContent = Languages.english.right;
            document.getElementById("keys").textContent = Languages.english.keys;
            break;
        case "por":
            document.getElementById("subtitle").textContent = Languages.portuguese.subtitle;
            document.getElementById("pause").textContent = Languages.portuguese.pause;
            document.getElementById("reset").textContent = Languages.english.reset;
            document.getElementById("l-click").textContent = Languages.portuguese.left;
            document.getElementById("r-click").textContent = Languages.portuguese.right;
            document.getElementById("keys").textContent = Languages.portuguese.keys;
    }
}
function safetyCheck() {
    if (count == null || typeof(count) != "number") {
        count = 0;
    }
    if (language == null) {
        language = "eng";
        localStorage.setItem("tmclkgam-lang", language);
    }
    languageSetting();
    document.getElementById('click-point').addEventListener('contextmenu', function(e) {
        e.preventDefault();
    })
    document.addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key.toLowerCase() == "arrowleft" || e.key.toLowerCase() == "a") {
            clickMoment("left")
        }
        else if (e.key.toLowerCase() == "arrowright" || e.key.toLowerCase() == "d") {
            clickMoment("right")
        }
        else {return}
    })
}