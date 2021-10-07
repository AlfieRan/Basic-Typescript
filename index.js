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
// Depending on which of these are true is which ones run/don't run
var RunTask1 = false; //Variables and Strings Tasks
var RunTask2 = false; //UserInput tasks
var RunTask3 = false; //FlowChart Task
var RunTask4 = false; //BillSplitter Task (Maths)
var RunTask5 = false; //Guess the Animal (Selection)
var RunTask6 = true; //Guess the Veg (Selection)
if (RunTask1) {
    console.log("----------Task 1----------");
    (0, VarsAndStrings_1.circleRadius)(); // The pi task
    (0, VarsAndStrings_2.Sentance)(); // The silly sentences task
}
if (RunTask2) {
    console.log("----------Task 2----------");
    (0, UserInput_1.FaceBookDataCollection)(); // The user input (marmite, decades old etc) task
}
if (RunTask3) {
    console.log("----------Task 3----------");
    (0, FlowChart_1.ChatBot)();
}
if (RunTask4) {
    console.log("----------Task 4----------");
    (0, BillSplitter_1.BillSplitter)();
}
if (RunTask5) {
    console.log("----------Task 5----------");
    (0, selection_1.GuessAnimal)();
}
if (RunTask6) {
    console.log("----------Task 6----------");
    (0, selection_2.GuessTheVeg)();
}
console.log("---------PROGRAM ENDED---------");
