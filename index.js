// return true if key exists
export default function hasKey(obj, key) {
  if (Object.keys(obj).includes(key)) {
    return true;
  } else {
    return false;
  }
}
