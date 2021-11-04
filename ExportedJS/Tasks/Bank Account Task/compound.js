"use strict";
// With thanks to/
// https://www.geeksforgeeks.org/program-find-compound-interest/
exports.__esModule = true;
var compoundInterest = function (principle, rate, time) {
    var amount = principle * (Math.pow((1 + rate / 100), time));
    var interest = amount - principle;
    return interest;
};
exports["default"] = compoundInterest;
