const assertArraysEqual = require("../assertArraysEqual");
const flattenRecursive = require("../flattenRecursive");

// TEST
assertArraysEqual(flattenRecursive([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flattenRecursive([1, [2, [3], 4]]), [1, 2, 3, 4]);
assertArraysEqual(flattenRecursive(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);