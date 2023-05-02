"use strict";
var calculator = {
    calculate: function(operation) {
        let num1 = Number(document.getElementById("calculator-input1").value);
        let num2 = Number(document.getElementById("calculator-input2").value);
        let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2
                break;
            default:
                result = num1 + num2;
                break;
        }
        console.log(result);
        document.getElementById("calculator-result").textContent = ` = ${result}`;
    }
}

var characterCount = {
    input: null,
    inputNoSpaces: null,
    charCount: 0,
    charCountNoSpaces: 0,
    count: function() {
        this.input = document.getElementById("character-count-input").value;
        this.charCount = this.input.length;
        document.getElementById("character-count-all").textContent = `${this.charCount} ${eng.characterCountAll}`;
        this.inputNoSpaces = document.getElementById("character-count-input").value.replace(/\s/g, "");
        this.charCountNoSpaces = this.inputNoSpaces.length;
        document.getElementById("character-count-nospaces").textContent = `${this.charCountNoSpaces} ${eng.characterCountNospace}`;
    }
}

var characterReplace = {
    input: null,
    replace: null,
    replaceWith: null,
    result: null,
    output: function() {
        this.result = this.input.replace(this.replace, this.replaceWith);
        document.getElementById("character-replace-output").textContent = this.result;
        return this.result;
    }
}

// TODO: Browing History Bookmark

// TODO: Naming Case Convertor
// var namingCaseConvertor = {
//     input: null,
// }