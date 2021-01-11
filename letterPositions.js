const assertArraysEqual = require("./assertArraysEqual");

// Function Implementation
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (sentence[i] != " ") {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// Test Case
const obj = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

assertArraysEqual(letterPositions("lighthouse in the house")["h"], obj["h"]);
assertArraysEqual(letterPositions("lighthouse in the house")["e"], obj["e"]);