// FUNCTION IMPLEMENTATION
const head = function(arr) {
  return arr[0];
};


// Test Function
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);