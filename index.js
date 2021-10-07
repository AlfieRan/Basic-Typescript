"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var VarsAndStrings_1 = require("./Tasks/VarsAndStrings");
var VarsAndStrings_2 = require("./Tasks/VarsAndStrings");
var UserInput_1 = require("./Tasks/UserInput");
var FlowChart_1 = require("./Tasks/FlowChart");
var RunTask1 = false;
var RunTask2 = false;
var RunTask3 = true;
var RunTask4 = true;
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
console.log("---------PROGRAM ENDED---------");
