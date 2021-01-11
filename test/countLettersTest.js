const assert = require('chai').assert;
const countLetters = require("../countLetters");


describe("#countLetters", () => {
  it("counts 1 instance of c when called with 'cory'", () => {
    assert.strictEqual(countLetters('cory')['c'], 1);
  });
  it("counts 2 instance of l when called with 'bella'", () => {
    assert.strictEqual(countLetters('bella')['l'], 2);
  });
});
