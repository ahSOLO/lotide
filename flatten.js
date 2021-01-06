const flatten = function (arr) {
  // create new empty array
  output = [];
  // loop through original array
  for (i = 0; i < arr.length; i++) {
    // if element is array, push its contents
    if (Array.isArray(arr[i])) {
      for (let ele of arr[i]) {
        output.push(ele);
      }
    }
    // if element is not array, push it
    else {
      output.push(arr[i]);
    }
  }
  return output;
};

// TEST CODE
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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);