const assertArraysEqual = require("./assertArraysEqual");

// Implementation
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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);

module.exports = flatten;