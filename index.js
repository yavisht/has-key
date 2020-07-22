export default (obj, key) => {
  if (Object.keys(obj).includes(key)) {
    return true;
  } else {
    return false;
  }
};
