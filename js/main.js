"use strict";

var website = {
    pageName: sessionStorage.getItem("currentP"),
    devName: "Raquel",
    theme: localStorage.getItem("theme"),
    lang: localStorage.getItem("lang"),
    wipShow: localStorage.getItem("wip"),
    dataCheck: function() {
        if (this.lang == null) {
            this.lang = "eng";
            localStorage.setItem("lang", this.lang);
        }
        if (this.theme == null) {
            this.theme = "default";
            localStorage.setItem("theme", this.theme);
        }
        if (this.wipShow == null) {
            this.wipShow = false;
            localStorage.setItem("wip", this.wipShow);
        }
        return;
    },
    wipCheck: function() {
        console.log(website.wipShow)
        if (website.wipShow == "false") {
            document.getElementById("entertainment").style.display = "none";
            document.getElementById("settings").style.display = "none";
        }
    },
    setup: function() {
        this.dataCheck();
        this.wipCheck();
        switch (this.lang) {
            case "eng":
                if (this.pageName != "home") document.getElementById("home").textContent = eng.home;
                document.getElementById("text").textContent = eng.text;
                document.getElementById("entertainment").textContent = eng.entertainment;
                document.getElementById("tools").textContent = eng.tools;
                document.getElementById("about").textContent = eng.about;
                document.getElementById("settings").textContent = eng.settings;
                switch (this.pageName) {
                    case "home":
                        document.getElementById("title").textContent = eng.title;
                        document.getElementById("brief-description").textContent = eng.briefDesc;
                        break;
                    case "text":
                        break;
                    case "entertainment":
                        break;
                    case "tools":
                        document.getElementById("calculator-tool").textContent = eng.calculatorTool;
                        document.getElementById("calculator-addition").textContent = eng.calculatorAddition;
                        document.getElementById("calculator-subtraction").textContent = eng.calculatorSubtraction;
                        document.getElementById("calculator-multiplication").textContent = eng.calculatorMultiplication;
                        document.getElementById("calculator-division").textContent = eng.calculatorDivision;
                        document.getElementById("character-count-tool").textContent = eng.characterCountTool;
                        // document.getElementById("character-replace-tool").textContent = eng.characterReplaceTool;
                        // document.getElementById("character-replace-input-label").textContent = eng.characterReplaceInputLabel;
                        // document.getElementById("character-replace-replacer-label").textContent = eng.characterReplaceReplacerLabel;
                        // document.getElementById("character-replace-replacer2-label").textContent = eng.characterReplaceReplacerLabel;
                        break;
                    case "about":
                        document.getElementById("about-dev").textContent = eng.aboutDev;
                        document.getElementById("about-website").textContent = eng.aboutWebsite;
                        document.getElementById("about-website-span").textContent = eng.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = eng.aboutWebsite2;
                        document.getElementById("fonts-credits").textContent = eng.fontsCredits;
                        break;
                }
                break;
            case "por": // Brazilian Portuguese.
                if (this.pageName != "home") document.getElementById("home").textContent = por.home;
                switch (this.pageName) {
                    case "home":
                        document.getElementById("title").textContent = por.title;
                        document.getElementById("brief-description").textContent = por.briefDesc;
                        document.getElementById("text").textContent = por.text;
                        document.getElementById("entertainment").textContent = por.entertainment;
                        document.getElementById("tools").textContent = por.tools;
                        document.getElementById("about").textContent = por.about;
                        document.getElementById("settings").textContent = por.settings;
                        break;
                    case "text":
                        break;
                    case "entertainment":
                        break;
                    case "tools":
                        break;
                    case "about":
                        document.getElementById("about-dev").textContent = por.aboutDev;
                        document.getElementById("about-website").textContent = por.aboutWebsite;
                        document.getElementById("about-website-span").textContent = por.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = por.aboutWebsite;
                        break;
                    }
            break;
        }
    }
}

document.title = `${website.devName} - ${website.pageName}`;
document.getElementById("js-disclaimer").remove();