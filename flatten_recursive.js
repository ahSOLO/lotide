const flatten = function (arr) {
  let output = [];
  for (i = 0; i < arr.length; i++) {
    console.log(output);
    flatRecursion(arr[i], output);
  }
  return output;
};

const flatRecursion = function (input, output) {
  if (Array.isArray(input)) {
    for (let ele of input) {
      flatRecursion(ele, output);
      console.log(ele);
    }
  }
  else {
    console.log("Input", input);
    output.push(input);
  } 
}

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

assertArraysEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, [3], 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);