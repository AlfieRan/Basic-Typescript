"use strict";
// If you're on MacOS just type 'bash execute.bash' to compile and run this script
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var VarsAndStrings_1 = require("./Tasks/VarsAndStrings");
var VarsAndStrings_2 = require("./Tasks/VarsAndStrings");
var UserInput_1 = require("./Tasks/UserInput");
var FlowChart_1 = require("./Tasks/FlowChart");
var BillSplitter_1 = require("./Tasks/BillSplitter");
var selection_1 = require("./Tasks/selection");
var selection_2 = require("./Tasks/selection");
var finiteIteration_1 = require("./Tasks/finiteIteration");
var finiteIteration_2 = require("./Tasks/finiteIteration");
var controlledIteration_1 = require("./Tasks/controlledIteration");
// Depending on which of these are true is which ones run/don't run
var Tasks = [VarsAndStrings_1.circleRadius, VarsAndStrings_2.Sentance, UserInput_1.FaceBookDataCollection, FlowChart_1.ChatBot, BillSplitter_1.BillSplitter, selection_1.GuessAnimal, selection_2.GuessTheVeg, finiteIteration_1.TimesTable, finiteIteration_2.BetterTimesTable, controlledIteration_1.NumberGuessing];
var TaskName = ["Using Pi to find a radius Task", "random sentence task", "Task: collect user data", "Task: bad chatbot", "Bill splitter", "Animal Guessing game", "vegetable guessing game", "times table program", "user input times tables", "Number Guessing Game"];
var Runtasks = [false, false, false, false, false, false, false, false, false, true];
for (var i = 0; i < (Tasks.length + 1); i++) {
    if (Runtasks[i] == true) {
        console.log("\n---------------Running: ", TaskName[i], "--------------------\n");
        Tasks[i]();
    }
}
console.log("\n---------PROGRAM ENDED---------\n");
