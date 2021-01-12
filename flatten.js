const flatten = function (arr) {
  // create new empty array
  output = [];
  // loop through original array
  for (i = 0; i < arr.length; i++) {
    // if element is array, push its contents
    if (Array.isArray(arr[i])) {
      for (let ele of arr[i]) {
        output.push(ele);
      }
    }
    // if element is not array, push it
    else {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;