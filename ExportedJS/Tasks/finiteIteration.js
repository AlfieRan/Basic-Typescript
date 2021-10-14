"use strict";
exports.__esModule = true;
exports.BetterTimesTable = exports.TimesTable = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function TimesTable() {
    var times_table = 5;
    var answer = 0;
    console.log("Here is the " + times_table + " times table");
    for (var y = 1; y < 11; y++) {
        answer = y * times_table;
        console.log(y + " times " + times_table + " is " + answer);
    }
}
exports.TimesTable = TimesTable;
function BetterTimesTable() {
    var first = parseInt(prompt("What is the first times table to print? "));
    var last = parseInt(prompt("What is the last times table to print? "));
    var how_far = parseInt(prompt("How far up the times table should each go ?"));
    var answer = 0;
    for (var x = first; x <= last; x++) {
        console.log("Here is the " + x + " times table");
        for (var y = 1; y <= how_far; y++) {
            answer = y * x;
            console.log(y + " times " + x + " is " + answer);
        }
    }
}
exports.BetterTimesTable = BetterTimesTable;
