const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1, 2, 3]), [2]) // => should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => should pass
assertArraysEqual(middle([1, "2", 3, 4]), ["2", 3]) // => should pass
assertArraysEqual(middle([1, 2, 3, 4]), [3]) // => should fail