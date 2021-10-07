"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var VarsAndStrings_1 = require("./Tasks/VarsAndStrings");
var VarsAndStrings_2 = require("./Tasks/VarsAndStrings");
var UserInput_1 = require("./Tasks/UserInput");
console.log("----------Task 1----------");
(0, VarsAndStrings_1.circleRadius)(); // The pi task
(0, VarsAndStrings_2.Sentance)(); // The silly sentences task
console.log("----------Task 2----------");
(0, UserInput_1.FaceBookDataCollection)(); // The user input (marmite, decades old etc) task
console.log("---------PROGRAM ENDED---------");
