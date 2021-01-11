// Function Implementation
const countLetters = function(sentence) {
  let input = sentence.split(" ").join("");
  let output = {};
  for (let letter of input) {
    output[letter] = (output[letter] || 0) + 1;
  }
  return output;
};

module.exports = countLetters;