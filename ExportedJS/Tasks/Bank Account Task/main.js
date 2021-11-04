"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RunTask = exports.TestIntrest = void 0;
var compound_1 = require("./compound");
// Constants are usually defined with ALL CAPS
// It makes them stand out
var INTEREST_RATE = 0.1;
var Bankacc = /** @class */ (function () {
    // TASK 1 - the name will need passing in
    // This is a special method called when creating a new bank account
    function Bankacc(accnumber, balance, name) {
        this.accnumber = accnumber;
        this.balance = balance;
        this.name = name;
    }
    ;
    // This is used to increase the balance of this account, by the amount passed in
    Bankacc.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    ;
    // Task 2 - add the withdraw method
    Bankacc.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    // Task 3 - Complete this function
    // It will need to call the compoundInterest function
    // It should pass a 'time' value of 1 to the interest function
    // It should use this.balance
    Bankacc.prototype.addInterest = function (time) {
        if (time === void 0) { time = 1; }
        this.balance = (0, compound_1["default"])(this.balance, INTEREST_RATE, time);
    };
    ;
    Bankacc.prototype.toString = function () {
        return "Account: " + this.accnumber + "  Balance: £" + this.balance.toFixed(2);
    };
    ;
    return Bankacc;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(ccnumber, balance, name, overdraft) {
        var _this = _super.call(this, ccnumber, balance, name) || this;
        _this.overdraft = overdraft;
        return _this;
    }
    return CurrentAccount;
}(Bankacc));
// Task 7 - Create a subclass (extends) called CurrentAccount
// Task 4 - Create a new bank account
// Task 5 - Call deposit
// Task 6 - Call withdraw
// Task 8 - Create a new current account
// Task 9 - call toString on the current account and print the value
// Task 10 - Call various functions on the Current Account to check that it
// correctly extends Account
function TestIntrest() {
    // This shows you how to call the compoundInterest function
    var myInterest = (0, compound_1["default"])(100, INTEREST_RATE, 4);
    // Print something, just so you know that the program has run
    console.log('Interest calculated', myInterest);
}
exports.TestIntrest = TestIntrest;
function RunTask() {
    var Bank = new Bankacc("10842378", 203197784163, "Jeffery Bezos");
    Bank.deposit(1000);
    Bank.withdraw(800);
    var curAcc = new CurrentAccount("10842378", 638725, "Mark Zuckerberg", 500);
    console.log(curAcc.toString());
    console.log("\nLet the testing being.....");
    curAcc.addInterest();
    curAcc.withdraw((curAcc.balance + 1));
    console.log(curAcc.toString());
    curAcc.deposit(420);
    curAcc.addInterest(3927);
    console.log(curAcc.toString());
}
exports.RunTask = RunTask;
