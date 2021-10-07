"use strict";
exports.__esModule = true;
exports.BillSplitter = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function BillSplitter() {
    console.log("---Welcome to Split My Bill---");
    var bill = parseFloat(prompt("What is the total bill?"));
    var people = parseInt(prompt("How many people are sharing?"));
    var tip_percentage = parseInt(prompt("What percentage tip would you like to leave?"));
    var TotalBill = (bill + (bill * (tip_percentage / 100)));
    var cost_per_person = TotalBill / people;
    console.log("\nTotal bill including tip is " + TotalBill + "\nTotal cost per person is " + cost_per_person);
}
exports.BillSplitter = BillSplitter;
