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

module.exports = takeUntil;