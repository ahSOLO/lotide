
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

module.exports = flatRecursion;