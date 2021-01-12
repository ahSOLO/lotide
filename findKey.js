const findKey = function(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) return key;
  }
  return undefined;
}

module.exports = findKey;