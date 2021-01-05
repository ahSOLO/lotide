// Check if arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1 === [] && arr2 !== []) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Check assertion that arrays are equal
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => should fail