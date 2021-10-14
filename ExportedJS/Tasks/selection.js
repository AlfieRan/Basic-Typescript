"use strict";
exports.__esModule = true;
exports.GuessTheVeg = exports.GuessAnimal = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function GuessAnimal() {
    console.log("Pick either Ostrich, Lion or Whale\nI will attempt to guess your choice");
    var answer = prompt('Does the animal live in the water? Y/N').toLowerCase();
    if (answer == "n" || answer == "no") {
        answer = prompt("Does the animal have wings? Y/N").toLowerCase();
        if (answer == "y" || answer == "yes") {
            console.log("It must be an Ostrich!");
        }
        else if (answer == "n" || answer == "no") {
            console.log("It must be a Lion!");
        }
        else {
            console.log("I was looking for a y/n answer");
        }
    }
    else if (answer == "y" || answer == "yes") {
        console.log("It must be a Whale!");
    }
    else {
        console.log("You didn't enter a yes or no answer :(");
    }
}
exports.GuessAnimal = GuessAnimal;
function GuessTheVeg() {
    console.log("Think of one of the following Vegetables: Peas, Broccoli, Sweetcorn, Carrots");
    var isGreen = prompt("Is it green?").toLowerCase();
    if (isGreen == "yes" || isGreen == "y") {
        var isTree = prompt("Does it look like a tree?").toLowerCase();
        if (isTree == "yes" || isTree == "y") {
            console.log("It must be brocolli");
        }
        else if (isTree == "no" || isTree == "n") {
            console.log("It must be peas");
        }
        else {
            console.log("Invalid Input");
        }
    }
    else if (isGreen == "no" || isGreen == "n") {
        var isOrange = prompt("Is it orange?").toLowerCase();
        if (isOrange == "yes" || isOrange == "y") {
            console.log("It must be carrots");
        }
        else if (isOrange == "no" || isOrange == "n") {
            console.log("It must be Sweetcorn");
        }
        else {
            console.log("Invalid Input");
        }
    }
    else {
        console.log("Invalid Input");
    }
}
exports.GuessTheVeg = GuessTheVeg;
