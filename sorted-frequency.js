function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, leftI = 0, rightI = arr.length - 1) {
  if (leftI <= rightI) {
    let midI = Math.floor((leftI + rightI) / 2);
    if (midI === 0 || (num > arr[midI - 1] && arr[midI] === num)) {
      return midI;
    } else if (num > arr[midI]) {
      return findFirst(arr, num, midI + 1, rightI);
    } else {
      return findFirst(arr, num, leftI, midI - 1);
    }
  }
  return -1;
}

function findLast(arr, num, leftI = 0, rightI = arr.length - 1) {
  if (leftI <= rightI) {
    let midI = Math.floor((leftI + rightI) / 2);
    if (midI === arr.length - 1 || (num < arr[midI + 1] && arr[midI] === num)) {
      return midI;
    } else if (num < arr[midI]) {
      return findLast(arr, num, leftI, midI - 1);
    } else {
      return findLast(arr, num, midI + 1, rightI);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
