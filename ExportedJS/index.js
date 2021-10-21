"use strict";
exports.__esModule = true;
// If you're on MacOS just type 'bash execute.bash' to compile and run this script
// Otherwise, idk do some stuff.
var promptSync = require("prompt-sync");
var prompt = promptSync();
var VarsAndStrings_1 = require("./Tasks/VarsAndStrings");
var UserInput_1 = require("./Tasks/UserInput");
var FlowChart_1 = require("./Tasks/FlowChart");
var BillSplitter_1 = require("./Tasks/BillSplitter");
var selection_1 = require("./Tasks/selection");
var finiteIteration_1 = require("./Tasks/finiteIteration");
var controlledIteration_1 = require("./Tasks/controlledIteration");
var OOP_task1_2_1 = require("./Tasks/OOP_task1&2");
var mainShapes_1 = require("./Tasks/shapes Task/mainShapes");
// Depending on which of these are true is which ones run/don't run
var Tasks = [VarsAndStrings_1.circleRadius, VarsAndStrings_1.Sentance, UserInput_1.FaceBookDataCollection, FlowChart_1.ChatBot, BillSplitter_1.BillSplitter, selection_1.GuessAnimal, selection_1.GuessTheVeg, finiteIteration_1.TimesTable, finiteIteration_1.BetterTimesTable, controlledIteration_1.NumberGuessing, OOP_task1_2_1.OOPTask1, mainShapes_1.runPogShape];
var TaskName = ["Using Pi to find a radius Task", "random sentence task", "Task: collect user data", "Task: bad chatbot", "Bill splitter", "Animal Guessing game", "vegetable guessing game", "times table program", "user input times tables", "Number Guessing Game", "OOP Task 1 (Jeffery Bezzos)", "shapey time"];
var Runtasks = [false, false, false, false, false, false, false, false, false, false, false, true];
for (var i = 0; i < (Tasks.length + 1); i++) {
    if (Runtasks[i] == true) {
        console.log("\n---------------Running: ", TaskName[i], "--------------------\n");
        Tasks[i]();
    }
}
console.log("\n---------PROGRAM ENDED---------\n");
