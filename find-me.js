function findMe(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return `${target} not found`;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return `found it at index ${middle}`;

  if (arr[middle] > target) return findMe(arr, target, start, middle - 1);

  if (arr[middle] < target) return findMe(arr, target, middle + 1, end);
}
const arr = [3, 6, 16, 28, 70, 249, 360];

console.log(findMe(arr, 16)); // Output: "found it at index 2"
console.log(findMe(arr, 70)); // Output: "found it at index 4"
console.log(findMe(arr, 100)); // Output: "100 not found"
