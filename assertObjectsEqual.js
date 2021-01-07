// Check if Objects are equal
const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  if (size1 !== size2) return false;
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!Array.isArray(object2[key])) return false;
      else if (!eqArrays(object1[key], object2[key])) return false;
    } 
    else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// Helper Function - eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  if (arr1 === [] && arr2 !== []) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Check assertion that objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
assertObjectsEqual( {a : "1", b : 2}, {a : "1", b : 2})
assertObjectsEqual( {a : "1", b : 2}, {a : 1, b : 2})