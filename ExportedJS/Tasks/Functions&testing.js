"use strict";
// task 8 part 1    - which is larger
exports.__esModule = true;
exports.Test_HCF = exports.LargerTesting = void 0;
function which_is_larger(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
function assert(statement) {
    if (statement) {
        console.log("Test Passed");
    }
    else {
        console.log("Test Failed");
    }
}
function LargerTesting() {
    assert(which_is_larger(4, 5) === 5);
    assert(which_is_larger(7, 3) === 7);
    assert(which_is_larger(1, 8) === 8);
    assert(which_is_larger(45, 57) === 57);
}
exports.LargerTesting = LargerTesting;
// task 8 part 2    - highest common factor
function highest_common_factor(a, b) {
    while (a > 0 && b > 0) {
        if (a == b) {
            return a;
        }
        else if (a > b) {
            a -= b;
        }
        else {
            b -= a;
        }
    }
    return 1;
}
function Test_HCF() {
    assert(highest_common_factor(12, 15) === 3);
    assert(highest_common_factor(28, 35) === 7);
    assert(highest_common_factor(40, 22) === 2);
    assert(highest_common_factor(60, 48) === 12);
    assert(highest_common_factor(273, 105) === 21);
}
exports.Test_HCF = Test_HCF;
