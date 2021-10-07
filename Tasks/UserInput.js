"use strict";
exports.__esModule = true;
exports.FaceBookDataCollection = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function FaceBookDataCollection() {
    var FirstInitial = prompt("Type in the initial of your first name: ");
    var Surname = prompt("Type in your surname: ");
    var Age = parseFloat(prompt("What is your age? "));
    var TempMarm = prompt("Do you like Marmite?").toLowerCase();
    var Marmatian = false;
    if (TempMarm == "y" || TempMarm == "yes") {
        Marmatian = true;
    }
    var Decades = Age / 10;
    var message = "\nHello " + FirstInitial + "," + Surname + ",\nIt is " + Marmatian + " that you like Marmite.\nThis is probably because you are " + Decades + " decades old.";
    console.log(message);
}
exports.FaceBookDataCollection = FaceBookDataCollection;
