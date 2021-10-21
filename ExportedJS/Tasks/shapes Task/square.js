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
var shape_1 = require("./shape");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side_length) {
        var _this = _super.call(this, "Square") || this;
        _this.side_length = side_length;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return Math.pow(this.side_length, 2);
    };
    return Square;
}(shape_1["default"]));
exports["default"] = Square;
