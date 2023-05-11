'use strict'

const Languages = {
    english: {
        subtitle: "Click on the right button at the right time.",
        pause: "Pause",
        left: "Left",
        right: "Right",
        keys: "Keys: (A), (Left Arrow);(D), (Right Arrow)\r\nYou can also use the mouse's left/right button on the circle."
    },
    portuguese: {
        subtitle: "Clique no botão certo no momento certo.",
        keys: "Teclas: (A), (Seta Esquerda);(D), (Seta Direita)\r\nVocê também pode usar o clique esquerdo/direito do mouse no círculo."
    }
}

var Game = {
    title: "Timing Clicking Game",
    version: "1.0",
    language: localStorage.getItem("tmclkgam-lang"),
    clicking: {
        start: function(doStart) {
            this.requiredClick = undefined;
            this.clickStage = 0;
            this.ongoingGame = doStart;
            this.requestAClick();
        },
        requiredClick: undefined,
        count: localStorage.getItem("tmclkgam-count"),
        clickStage: 0,
        clickedAlready: false,
        ongoingGame: true,
        extraTime: [250, 500, 750, 1000, 1250],
        update: function() {
            return // TODO
        },
        requestAClick: function() {
            console.log("Requesting a click...");
            if (this.requiredClick != undefined || this.ongoingGame == false) {
                console.warn(`Couldn't request a click. RQ: ${this.requiredClick}; OG: ${this.ongoingGame}`)
                try {
                    console.log("Cleaning Interval...")
                    clearInterval(timeCount);
                }
                catch {console.warn("Couldn't clean interval. Perhaps there was nothing to clean?")}
                return;  
            } 
            if (Math.floor(Math.random() * 2) == 1) {this.requiredClick = "left"}
            else {this.requiredClick = "right"}
            console.log(`Click requested! Player must press ${this.requiredClick} button.`);
            var timeCount = setInterval(function() {
                console.log("Tick. timeCount interval.");
                console.log(Game.clicking.ongoingGame)
                if (Game.clicking.clickedAlready || !Game.clicking.ongoingGame) {
                    console.warn("Ticking is supposed to stop.")
                    Game.clicking.clickStage = 0;
                    Game.clicking.clickedAlready = false;
                    clearInterval(timeCount);
                    return;
                }
                if (Game.clicking.clickStage >= 4) {
                    if (!Game.clicking.ongoingGame) {
                        console.warn("Tick interrupted by no ongoing game.");
                        Game.clicking.clickStage = 0;
                        Game.clicking.clickedAlready = false;
                        clearInterval(timeCount);
                        return;
                    }
                    if (Game.clicking.clickedAlready) {
                        console.warn("Player has clicked already!")
                        Game.clicking.clickStage = 0;
                        Game.clicking.clickedAlready = false;
                        clearInterval(timeCount);
                        return;
                    }
                    console.log("CLICK OVER");
                    Game.clicking.clickMoment(Game.clicking.registeredClick);
                    Game.clicking.clickStage = 0;
                    clearInterval(timeCount);
                    return;
                }
                Game.clicking.clickStage++;
            }, 500 + this.extraTime[Math.floor(Math.random() * 5)]);
        },
        clickMoment: function(sentClick) {
            console.log(`Click Check Moment received "${sentClick}" CLICK (expected: "${this.requiredClick}" CLICK)`);
            if (sentClick == this.requiredClick) {
                console.log("CORRECT CLICK");
                this.count++
                localStorage.setItem("tmclkgam-count", this.count);
                this.update();
                this.requestAClick();
            }
            else {
                console.log("INCORRECT CLICK");
                this.ongoingGame = false;
                // TODO: Send player to main menu.
            }
            console.log("Undoing click requirement.")
            clearInterval(this.requestAClick.timeCount);
            this.requiredClick == undefined;
        }
    },
    languageSwitch: function() {

    },
    languageSetting: function() {
        switch(this.language) {
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
    },
    safetyCheck: function() {
        if (Game.clicking.count == null || typeof(Game.clicking.count) != "number") {
            Game.clicking.count = 0;
            localStorage.setItem("tmclkgam-count", Game.clicking.count);
        }
        if (this.language == null) {
            this.language = "english",
            localStorage.setItem("tmclkgam-lang", this.language);
            this.languageSetting();
        }
    }
}