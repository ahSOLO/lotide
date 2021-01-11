const assertArraysEqual = require("./assertArraysEqual");

// Without function - takes an array and returns a new array with certain elements taken out.
const without = function(arr, extract) {
  let output = arr.slice(0);
  // loop through array
  for (let i = 0; i < output.length; i++) { // alternative: use arr.length
    // check if array element is equal to any element in extract array - alternative: use .includes(?)
    // loop through extract array
    for (let j = 0; j < extract.length; j++) {
      if (output[i] === extract[j]) {
        // if met, remove the element from the original array
        output.splice(i, 1);
        // adjust indexes so elements are not skipped
        i--;
        // restart at the beginning of the second for loop.
        break;
      }
    }
  }
  return output;
};

// TEST 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([9, 2, 3, 3, "3", "2", "s"], [1, "s", "3"]), [9, 2, 3, 3, "2"]);
assertArraysEqual(without(["a", "b", "c"], ["a", "b", "c"]), []);