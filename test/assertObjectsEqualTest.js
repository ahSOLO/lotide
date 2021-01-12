const assertObjectsEqual = require("../assertObjectsEqual");

// Test cases
assertObjectsEqual( {a : "1", b : 2}, {a : "1", b : 2})
assertObjectsEqual( {a : "1", b : 2}, {a : 1, b : 2})