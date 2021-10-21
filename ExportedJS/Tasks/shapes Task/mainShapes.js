"use strict";
exports.__esModule = true;
exports.runPogShape = void 0;
var circle_1 = require("./circle");
var square_1 = require("./square");
var triangle_1 = require("./triangle");
function runPogShape() {
    var shapes = [];
    shapes.push(new square_1["default"](4));
    shapes.push(new triangle_1["default"](2, 3));
    shapes.push(new circle_1["default"](6));
    shapes.forEach(function (shape) {
        console.log("Calculating Area of " + shape.name);
        var area = shape.calculateArea();
        console.log(area);
    });
}
exports.runPogShape = runPogShape;
