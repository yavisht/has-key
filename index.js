// return true if key exists
module.exports = function hasKey(obj, key) {
  if (Object.keys(obj).includes(key)) {
    return true;
  } else {
    return false;
  }
};
