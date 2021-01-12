const eqArrays = function(arr1, arr2) {
  recurReturn = true;
  if (arr1.length !== arr2.length) return false;
  if (arr1 === [] && arr2 !== []) return false;
  for (let i = 0; i < arr1.length; i++) {
    // Recursive array check
    if (Array.isArray(arr1[i])) {
      if (!Array.isArray(arr2[i])) return false;
      recurReturn = eqArrays(arr1[i], arr2[i]);
    }
    // Primitives check
    else if (arr1[i] !== arr2[i]) return false;
  }
  return recurReturn;
};

module.exports = eqArrays;
