// Test Function
const eqArrays = function(arr1, arr2) {
  recurReturn = true;
  if (arr1.length !== arr2.length) return false;
  if (arr1 === [] && arr2 !== []) return false;
  for (let i = 0; i < arr1.length; i++) {
    // Recursive array check
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) return false;
      recurReturn = eqArrays(arr1[i], arr2[i]);
    }
    // Primitives check
    else if (arr1[i] !== arr2[i]) return false;
  }
  return recurReturn;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }  
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => should fail

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4, [5]]], [[2, 3], [4, [5]]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false