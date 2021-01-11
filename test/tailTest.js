// const assertArraysEquals = require("../assertArraysEqual");
const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});

// // Test Case: Check that Length and Contents of tail is correct
// assertArraysEquals(tail(["Test", "Test1", "Test2"]), ["Test1", "Test2"]);
// assertArraysEquals(tail([]), []);

// // Test Case: Check the original array length has not changed
// const assertEqual = function(actual, expected) {
//   if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   if (actual !== expected) console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
// };

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!