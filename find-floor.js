function findFloor(arr, num, low=0, high=arr.length-1) {

        // if true --> empty array
        if (low > high) return -1
        // num is last element in array
        if (num >= arr[high]) return arr[high];
        
        let mI = Math.floor((low + high)/2)

        if (arr[mI] === num) return arr[mI];

        if (mI > 0 && num < arr[mI] && arr[mI - 1] <=  num) {
            return arr[mI - 1]
        }

        if (arr[mI] > num) {
            return findFloor(arr, num, low, mI -1)
        } else if (arr[mI] < num) {
            return findFloor(arr, num, mI + 1, high)
        }
    }

module.exports = findFloor


