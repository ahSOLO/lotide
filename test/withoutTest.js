const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

// TEST
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([9, 2, 3, 3, "3", "2", "s"], [1, "s", "3"]), [9, 2, 3, 3, "2"]);
assertArraysEqual(without(["a", "b", "c"], ["a", "b", "c"]), []);
