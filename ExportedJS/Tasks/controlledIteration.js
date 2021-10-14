"use strict";
exports.__esModule = true;
exports.NumberGuessing = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function NumberGuessing() {
    var number = GetRandInt(1, 10);
    console.log(number);
    var guess = parseInt(prompt("Guess a number between 1 and 10 (inclusive): "));
    while (guess != number) {
        console.log("Incorrect!");
        guess = parseInt(prompt("Guess a number between 1 and 10: "));
    }
    console.log("Correct!");
}
exports.NumberGuessing = NumberGuessing;
function GetRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
