// Function Implementation
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Code
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

// Test Case
assertArraysEqual(map(words, x => x[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, x => x[x.length-1]), ["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, x => x.length), [6, 7, 2, 5, 3]);