function countZeroes(binaryList) {
  let liIx = 0;
  let reIx = binaryList.length - 1;

  while (liIx <= reIx) {
    let midIx = Math.floor((liIx + reIx) / 2);
    let midValue = binaryList[midIx];

    if (midValue === 1) {
      liIx = midIx + 1;
    } else if (midValue === 0) {
      reIx = midIx - 1;
    } else {
      return binaryList.length - midIx;
    }
  }

  return binaryList.length - liIx;
}

module.exports = countZeroes;
