"use strict";

var Website = {
    pageName: sessionStorage.getItem("currentP"),
    devName: "Raquel",
    kofiLink: "rachelviolet",
    redditLink: "rachievi",
    theme: localStorage.getItem("theme"),
    lang: localStorage.getItem("lang"),
    wipShow: localStorage.getItem("wip"),
    dataCheck: function() {
        if (this.lang == null) {
            if (navigator.language == "pt-BR" ) {
                this.lang = "ptbr";
            }
            else {
                this.lang = "eng";
            }
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
        this.themeSet();
        return;
    },
    wipCheck: function() {
        if (this.wipShow == false || this.wipShow == "false") {
            document.getElementById("entertainment").style.display = "none";
            document.getElementById("settings").style.display = "none";
        }
    },
    themeSwitch: function(userChoice) {
        if (userChoice) {
            if (this.theme == "default") {
                this.theme = "light";
                localStorage.setItem("theme", this.theme);
            }
            else if (this.theme == "light") {
                this.theme = "default";
                localStorage.setItem("theme", this.theme);
            }
        }
        this.themeSet();
    },
    themeSet: function () {
        if (this.theme == "default") {
            document.body.style.backgroundColor = "#000";
            var tags = document.getElementsByTagName("a");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            tags = document.getElementsByTagName("button");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            var tags = document.getElementsByTagName("p");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            tags = document.getElementsByTagName("h1");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            var tags = document.getElementsByTagName("h2");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            tags = document.getElementsByTagName("section");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            var tags = document.getElementsByTagName("span");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            tags = document.getElementsByTagName("nav");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            var tags = document.getElementsByTagName("label");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
            tags = document.getElementsByTagName("input");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#0f0";
            }
        }
        else if (this.theme == "light") {
            document.body.style.backgroundColor = "#fff";
            var tags = document.getElementsByTagName("a");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            tags = document.getElementsByTagName("button");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            var tags = document.getElementsByTagName("p");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            tags = document.getElementsByTagName("h1");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            var tags = document.getElementsByTagName("h2");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            tags = document.getElementsByTagName("section");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            var tags = document.getElementsByTagName("span");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            tags = document.getElementsByTagName("nav");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            var tags = document.getElementsByTagName("label");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
            tags = document.getElementsByTagName("input");
            for (var x = 0; x < tags.length; x++) {
                tags[x].style.color = "#000";
            }
        }
    },
    setup: function(settingNewLanguage, newLang) {
        if (!settingNewLanguage) {document.getElementById("js-disclaimer").remove();}
        if (settingNewLanguage) {
            this.lang = newLang;
            localStorage.setItem("lang", newLang);
        }
        this.dataCheck();
        this.wipCheck();
        document.title = `${Website.devName} - ${Website.pageName}`;
        switch (this.lang) {
            case "eng":
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
                        document.getElementById("kofi").textContent = Languages.multi.kofi;
                        document.getElementById("reddit").textContent = Languages.multi.reddit;
                        document.getElementById("about-dev").textContent = Languages.eng.aboutDev;
                        document.getElementById("about-website").textContent = Languages.eng.aboutWebsite;
                        document.getElementById("about-website-span").textContent = Languages.eng.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = Languages.eng.aboutWebsite2;
                        document.getElementById("fonts-credits").textContent = Languages.eng.fontsCredits;
                        break;
                }
                break;
            case "ptbr": // Brazilian Portuguese.
                if (this.pageName != "home") document.getElementById("home").textContent = Languages.ptbr.home;
                document.getElementById("text").textContent = Languages.ptbr.text;
                document.getElementById("entertainment").textContent = Languages.ptbr.entertainment;
                document.getElementById("tools").textContent = Languages.ptbr.tools;
                document.getElementById("about").textContent = Languages.ptbr.about;
                document.getElementById("settings").textContent = Languages.ptbr.settings;
                switch (this.pageName) {
                    case "home":
                        document.getElementById("title").textContent = Languages.ptbr.title;
                        document.getElementById("brief-description").textContent = Languages.ptbr.briefDesc;
                        break;
                    case "text":
                        break;
                    case "entertainment":
                        break;
                    case "tools":
                        document.getElementById("calculator-tool").textContent = Languages.ptbr.calculatorTool;
                        document.getElementById("calculator-addition").textContent = Languages.ptbr.calculatorAddition;
                        document.getElementById("calculator-subtraction").textContent = Languages.ptbr.calculatorSubtraction;
                        document.getElementById("calculator-multiplication").textContent = Languages.ptbr.calculatorMultiplication;
                        document.getElementById("calculator-division").textContent = Languages.ptbr.calculatorDivision;
                        document.getElementById("character-count-tool").textContent = Languages.ptbr.characterCountTool;
                        // document.getElementById("character-replace-tool").textContent = Languages.ptbr.characterReplaceTool;
                        // document.getElementById("character-replace-input-label").textContent = Languages.ptbr.characterReplaceInputLabel;
                        // document.getElementById("character-replace-replacer-label").textContent = Languages.ptbr.characterReplaceReplacerLabel;
                        // document.getElementById("character-replace-replacer2-label").textContent = Languages.ptbr.characterReplaceReplacerLabel;
                        break;
                    case "about":
                        document.getElementById("kofi").textContent = Languages.multi.kofi;
                        document.getElementById("reddit").textContent = Languages.multi.reddit;
                        document.getElementById("about-dev").textContent = Languages.ptbr.aboutDev;
                        document.getElementById("about-website").textContent = Languages.ptbr.aboutWebsite;
                        document.getElementById("about-website-span").textContent = Languages.ptbr.aboutWebsiteSpan;
                        document.getElementById("about-website2").textContent = Languages.ptbr.aboutWebsite2;
                        document.getElementById("fonts-credits").textContent = Languages.ptbr.fontsCredits;
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

document.title = `${Website.devName} - ...`;