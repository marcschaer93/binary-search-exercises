function findRotationCount(array) {
  let pivot = findPivot(array);
  if (pivot === 0) {
    return 0;
  } else {
    return pivot;
  }
}

function findPivot(array) {
  let start = 0;
  let end = array.length - 1;
  if (array.length === 1 || array[start] < array[end]) return 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] > array[mid + 1]) return mid + 1;
    else if (array[start] <= array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

module.exports = findRotationCount;
