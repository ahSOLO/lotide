const assert = require('chai').assert;
const countOnly = require('../countOnly');

// Test Case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", ()=>{
  it("should count 1 when called with 'Jason'", ()=> {
    assert.strictEqual(countOnly(firstNames, { "Jason": true })["Jason"], 1);
  })
  it("should count 2 when called with 'Fang'", ()=> {
    assert.strictEqual(countOnly(firstNames, { "Fang": true })["Fang"], 2);
  })
});

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);