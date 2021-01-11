// Function Implementation
const findKeyByValue = function(obj, search) {
  for (const [key, value] of Object.entries(obj)) {
    if (search === value) return key;
  }
};

module.exports = findKeyByValue;