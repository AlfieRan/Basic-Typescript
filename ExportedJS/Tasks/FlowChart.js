"use strict";
exports.__esModule = true;
exports.ChatBot = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function ChatBot() {
    console.log("Hello my name is Susan from Space.");
    var Name = prompt("What is your name?");
    console.log("Hello " + Name + ", I am from the year 2210 and I am 20 years old.");
    var Age = parseFloat(prompt("How old are you?"));
    var FutureAge = Age + (2210 - 2020);
    console.log("Wow by 2210 you while be " + FutureAge + ", that is really old!");
    var Music = prompt("What music are you into?");
    console.log("I've not heard of " + Music);
}
exports.ChatBot = ChatBot;
