// Middle Function
const middle = function(arr) {
  let output = [];
  // If array has 2 or less elements, return empty array
  if (arr.length <= 2) return output;
  // If even # of elements, push the two middle array elements
  if (arr.length % 2 == 0) {
    leftMid = arr[Math.floor(arr.length / 2) - 1];
    rightMid = arr[Math.floor(arr.length / 2)]
    output.push(leftMid);
    output.push(rightMid); 
  // If odd # of elements, push the single middle array element
  } else {
    mid = arr[Math.floor(arr.length / 2)];
    output.push(mid);
  }
  return output;
};

// TEST FUNCTIONS
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

assertArraysEqual(middle([1, 2, 3]), [2]) // => should pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => should pass
assertArraysEqual(middle([1, "2", 3, 4]), ["2", 3]) // => should pass
assertArraysEqual(middle([1, 2, 3, 4]), [3]) // => should fail