// Task #1 :

const findNums = (nums) => {
    const result = [];
    let start = 0, end = nums.length - 1, middle;

    while (start <= end && result.length < 2) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] - nums[middle - 1] === 2) result.push(nums[middle] - 1);
        if (nums[middle] - nums[middle - 1] === 3) result.push(nums[middle] - 2, nums[middle] - 1);

        if (nums[middle] - middle === 1) start = middle + 1;
        if (nums[middle] - middle === 2) start = middle + 1;
        if (nums[middle] - middle === 3) end = middle - 1;
    };

    start = 0;

    while (start <= end && result.length < 2) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] - nums[middle - 1] === 2) result.push(nums[middle] - 1);

        if (nums[middle] - middle === 1) start = middle + 1;
        if (nums[middle] - middle === 2) end = middle - 1;
    };

    return result;
};


// Tests

const nums1 = [1, 4]; // 2, 3
const nums2 = [1, 3, 5]; // 2, 4
const nums3 = [1, 2, 4, 5, 6, 7, 9, 10]; // 3, 8
const nums4 = [1, 4, 5, 6, 8, 7, 9, 10]; // 2, 3
const nums5 = [1, 2, 3, 4, 5, 6, 7, 10]; // 8, 9
const nums6 = [1, 3, 4, 5, 6, 7, 8, 10]; // 2, 9
const nums7 = [1, 2, 3, 4, 6, 7, 8, 10]; // 5, 9
const nums8 = [1, 3, 4, 6, 7, 8, 9, 10]; // 2, 5 

console.log('1', findNums(nums1));
console.log('2', findNums(nums2));
console.log('3', findNums(nums3));
console.log('4', findNums(nums4));
console.log('5', findNums(nums5));
console.log('6', findNums(nums6));
console.log('7', findNums(nums7));
console.log('8', findNums(nums8));


// ----------------------------------------------
// Task #2 :

// Сложность binerySearch алгоритма O(log2n).
// Так как в решении используем цикл while два раза, то сложность решения в наихудшем случае будет O(2 * log2n). 