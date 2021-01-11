const eqArrays = require("./eqArrays");

// Function Implementation

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  let recurReturn = true;
  if (size1 !== size2) return false;
  for (let key of Object.keys(object1)) {
    // Compare arrays
    if (Array.isArray(object1[key])) {
      if (!Array.isArray(object2[key])) return false;
      else if (!eqArrays(object1[key], object2[key])) return false;
    } 
    // Recursively apply self to objects
    else if (typeof object1[key] === 'object' && object1[key] !== null) {
      if (!object2[key]) return false;
      recurReturn = eqObjects(object1[key], object2[key]);
    }
    // Compare primitives
    else if (object1[key] !== object2[key]) return false;
  }
  return recurReturn;
};

module.exports = eqObjects;