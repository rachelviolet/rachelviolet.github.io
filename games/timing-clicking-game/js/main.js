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
    count: localStorage.getItem("tmclkgam-count"),
    clicking: {
        requiredClick: undefined,
        clickStage: 0,
        extraTime: [250, 500, 750, 1000, 1250],
        requestAClick: function() {
            console.log("Requesting a click...");
            if (this.requiredClick != undefined) return;
            if (Math.floor(Math.random() * 2) == 1) {this.requiredClick = "left"}
            else {this.requiredClick = "right"}
            console.log(`Click requested! Player must press ${this.requiredClick} button.`)
            var timeCount = setInterval(function() {
                console.log("Tick. timeCount interval.")
                if (Game.clicking.clickStage >= 4) {
                    console.log("CLICK OVER");
                    Game.clicking.clickMoment(Game.clicking.registeredClick);
                    clearInterval(timeCount);
                }
                Game.clicking.clickStage++;
            }, 500 + this.extraTime[Math.floor(Math.random() * 5)])
        },
        clickMoment: function(sentClick) {
            if (sentClick == this.requiredClick) {
                console.log("CORRECT CLICK");
            }
            else {
                console.log("INCORRECT CLICK");
                // TODO: Send player to main menu.
            }
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
    click: function(input) {
        clearInterval(this.clicking.requestAClick.timeCount);
        this.clicking.clickMoment(input);
    },
    safetyCheck: function() {
        if (this.count == null || typeof(this.count) != "number") {
            this.count = 0;
            localStorage.setItem("tmclkgam-count", this.count);
        }
        if (this.language == null) {
            this.language = "english",
            localStorage.setItem("tmclkgam-lang", this.language);
            this.languageSetting();
        }
    }
}