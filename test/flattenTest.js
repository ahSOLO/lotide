const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);
