const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => should fail

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4, [5]]], [[2, 3], [4, [5]]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false