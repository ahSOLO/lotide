const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");


assertArraysEqual(map(words, x => x[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, x => x[x.length-1]), ["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, x => x.length), [6, 7, 2, 5, 3]);