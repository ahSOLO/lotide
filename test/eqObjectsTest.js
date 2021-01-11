const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("#eqObjects", () => {
  it ("should return ab === ba", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  })
  it ("should return cd === dc", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  })
});


// assertEqual(eqObjects(ab, ba), true); // => true
// assertEqual(eqObjects(cd, dc), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true
// assertEqual(eqObjects({ a: { z: { y: 3 } }, b: 2 }, { a: { z: { y: 3 } } , b: 2 }), true) // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
