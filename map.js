const assertArraysEqual = require("./assertArraysEqual");

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

// Test Case
assertArraysEqual(map(words, x => x[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, x => x[x.length-1]), ["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, x => x.length), [6, 7, 2, 5, 3]);

module.exports = map;