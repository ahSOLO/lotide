const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (arr) {
  let output = [];
  for (i = 0; i < arr.length; i++) {
    console.log(output);
    flatRecursion(arr[i], output);
  }
  return output;
};

const flatRecursion = function (input, output) {
  if (Array.isArray(input)) {
    for (let ele of input) {
      flatRecursion(ele, output);
      console.log(ele);
    }
  }
  else {
    console.log("Input", input);
    output.push(input);
  } 
}

// TEST

assertArraysEqual(flatten([1, 2, [[3, 4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, [3], 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten(["nonono", ["wewewe"]]), ["nonono", "wewewe"]);