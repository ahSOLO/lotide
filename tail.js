// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  return arr.slice(1);
};

// TEST CODE
// Test Case: Check that Length and Contents of tail is correct
const assertEqualArr = function(actual, expected) {
  for (let i = 1; i < actual.length; i++) {
    if (actual[i] !== expected[i]) console.log(`❌ Assertion Failed: ${actual[i]} !== ${expected[i]}`);
  }
  if (actual.length !== expected.length) console.log(`❌ Assertion Failed: length of ${actual} !== length of ${expected}`);
  if (actual === [] && expected !== []) console.log(`❌ Assertion Failed: tail of [] !== []`);
};

assertEqualArr(tail(["Test", "Test1", "Test2"]), ["Test1", "Test2"]);
assertEqualArr(tail([]), []);

// Test Case: Check the original array length has not changed
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!