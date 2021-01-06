// Function Implementation
const countLetters = function(sentence) {
  let input = sentence.split(" ").join("");
  let output = {};
  for (let letter of input) {
    output[letter] = (output[letter] || 0) + 1;
  }
  return output;
};

// Test Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case
assertEqual(countLetters("crazya")["c"], 1);
assertEqual(countLetters("crazya")["r"], 1);
assertEqual(countLetters("crazya")["a"], 2);