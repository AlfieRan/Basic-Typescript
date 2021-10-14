"use strict";
exports.__esModule = true;
exports.BillSplitter = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function BillSplitter() {
    console.log("---Welcome to Split My Bill---");
    var bill = parseFloat(prompt("What is the total bill?")); //Tried putting the console.log line above in this prompt but it did not like it
    var people = parseInt(prompt("How many people are sharing?"));
    var tip_percentage = parseInt(prompt("What percentage tip would you like to leave?"));
    var TotalBill = Math.round(100 * (bill + (bill * (tip_percentage / 100)))) / 100; //multiplying then dividing by 100 is to round to 2 dp
    var cost_per_person = Math.round(TotalBill * 100 / people) / 100; //multiplying then dividing by 100 is to round to 2 dp
    console.log("\nTotal bill including tip is " + TotalBill + "\nTotal cost per person is " + cost_per_person);
}
exports.BillSplitter = BillSplitter;
