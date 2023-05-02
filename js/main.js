"use strict";

var Website = {
    pageName: sessionStorage.getItem("currentP"),
    engDevName: "Rachel",
    ptbrDevName: "Raquel",
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
        console.log(Website.wipShow)
        if (Website.wipShow == "false") {
            document.getElementById("entertainment").style.display = "none";
            document.getElementById("settings").style.display = "none";
        }
    },
    setup: function() {
        this.dataCheck();
        this.wipCheck();
        switch (this.lang) {
            case "eng":
                document.title = `${Website.engDevName} - ${Website.pageName}`;
                if (this.pageName != "home") document.getElementById("home").textContent = Languages.eng.home;
                document.getElementById("text").textContent = Languages.eng.text;
                document.getElementById("entertainment").textContent = Languages.eng.entertainment;
                document.getElementById("tools").textContent = Languages.eng.tools;
                document.getElementById("about").textContent = Languages.eng.about;
                document.getElementById("settings").textContent = Languages.eng.settings;
                switch (this.pageName) {
                    case "home":
                        document.getElementById("title").textContent = Languages.eng.title;
                        document.getElementById("brief-description").textContent = Languages.eng.briefDesc;
                        break;
                    case "text":
                        break;
                    case "entertainment":
                        break;
                    case "tools":
                        document.getElementById("calculator-tool").textContent = Languages.eng.calculatorTool;
                        document.getElementById("calculator-addition").textContent = Languages.eng.calculatorAddition;
                        document.getElementById("calculator-subtraction").textContent = Languages.eng.calculatorSubtraction;
                        document.getElementById("calculator-multiplication").textContent = Languages.eng.calculatorMultiplication;
                        document.getElementById("calculator-division").textContent = Languages.eng.calculatorDivision;
                        document.getElementById("character-count-tool").textContent = Languages.eng.characterCountTool;
                        // document.getElementById("character-replace-tool").textContent = Languages.eng.characterReplaceTool;
                        // document.getElementById("character-replace-input-label").textContent = Languages.eng.characterReplaceInputLabel;
                        // document.getElementById("character-replace-replacer-label").textContent = Languages.eng.characterReplaceReplacerLabel;
                        // document.getElementById("character-replace-replacer2-label").textContent = Languages.eng.characterReplaceReplacerLabel;
                        break;
                    case "about":
                        document.getElementById("about-dev").textContent = Languages.eng.aboutDev;
                        document.getElementById("about-website").textContent = Languages.eng.aboutWebsite;
                        document.getElementById("about-website-span").textContent = Languages.eng.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = Languages.eng.aboutWebsite2;
                        document.getElementById("fonts-credits").textContent = Languages.eng.fontsCredits;
                        break;
                }
                break;
            case "ptbr": // Brazilian Portuguese.
                document.title = `${Website.ptbrDevName} - ${Website.pageName}`;
                if (this.pageName != "home") document.getElementById("home").textContent = Langauges.ptbr.home;
                switch (this.pageName) {
                    case "home":
                        document.getElementById("title").textContent = Langauges.ptbr.title;
                        document.getElementById("brief-description").textContent = Langauges.ptbr.briefDesc;
                        document.getElementById("text").textContent = Langauges.ptbr.text;
                        document.getElementById("entertainment").textContent = Langauges.ptbr.entertainment;
                        document.getElementById("tools").textContent = Langauges.ptbr.tools;
                        document.getElementById("about").textContent = Langauges.ptbr.about;
                        document.getElementById("settings").textContent = Langauges.ptbr.settings;
                        break;
                    case "text":
                        break;
                    case "entertainment":
                        break;
                    case "tools":
                        break;
                    case "about":
                        document.getElementById("about-dev").textContent = Langauges.ptbr.aboutDev;
                        document.getElementById("about-website").textContent = Langauges.ptbr.aboutWebsite;
                        document.getElementById("about-website-span").textContent = Langauges.ptbr.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = Langauges.ptbr.aboutWebsite;
                        break;
                    }
            break;
        }
    },
    displayTool: function (tool) {
        document.getElementById("calculator-tool-div").style.display = "none";
        document.getElementById("character-count-tool-div").style.display = "none";
        document.getElementById("character-replace-tool-div").style.display = "none";
        switch (tool) {
            case "calc":
                document.getElementById("calculator-tool-div").style.display = "inline";
                break;
            case "count":
                document.getElementById("character-count-tool-div").style.display = "block";
                break;
            case "replace":
                document.getElementById("character-replace-tool-div").style.display = "inline";
                break;
        }
    }
}

document.title = `${Website.engDevName} - ...`;
document.getElementById("js-disclaimer").remove();