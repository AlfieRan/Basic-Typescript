"use strict";
exports.__esModule = true;
exports.SimonSays = exports.PrintColours = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function PrintColours() {
    var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    console.log('Printing Colours...');
    for (var i = 0; i < colours.length; i++) {
        console.log(colours[i]);
    }
    console.log('Finished');
}
exports.PrintColours = PrintColours;
function SimonSays() {
    var simon_says = ["Hands on head", "Hands on ears", "Right hand up", "Left hand up", "Hands on shoulders"];
    var Instruction = simon_says[parseInt(prompt("Pick a number between 0 and " + (simon_says.length - 1) + ": "))];
    console.log("Simon Says... " + Instruction);
}
exports.SimonSays = SimonSays;
