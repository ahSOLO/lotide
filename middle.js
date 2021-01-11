// Middle Function
const middle = function(arr) {
  let output = [];
  // If array has 2 or less elements, return empty array
  if (arr.length <= 2) return output;
  // If even # of elements, push the two middle array elements
  if (arr.length % 2 == 0) {
    leftMid = arr[Math.floor(arr.length / 2) - 1];
    rightMid = arr[Math.floor(arr.length / 2)]
    output.push(leftMid);
    output.push(rightMid); 
  // If odd # of elements, push the single middle array element
  } else {
    mid = arr[Math.floor(arr.length / 2)];
    output.push(mid);
  }
  return output;
};

module.exports = middle;