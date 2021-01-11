const assertArraysEqual = require("./assertArraysEqual");

// takeUntil function
const takeUntil = function(array, callback) {
  let output = [];
  for (let value of array) {
    if (!callback(value)) {
      output.push(value);
    }
    else break;
  }
  return output;
}

// Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil([1,2,3,4,5,6,7], x => x > 4), [1,2,3,4]);
assertArraysEqual(takeUntil([1,2,3,4,5,"6",7], x => (typeof x === "string")), [1,2,3,4,5]);

module.exports = takeUntil;