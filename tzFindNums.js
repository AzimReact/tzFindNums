// Task #1 :

const nums1 = [3];
const nums2 = [1, 4];
const nums3 = [1, 3, 5];
const nums4 = [1, 2, 4, 5, 6, 7, 9, 10];
const nums5 = [1, 4, 5, 6, 8, 7, 9, 10];
const nums6 = [1, 2, 3, 4, 5, 6, 7, 10];
const nums7 = [1, 3, 4, 5, 6, 7, 8, 10];
const nums0 = [1, 3]; // если пропущен один элемент, отработает и для [2]

const findNums = (nums) => {
    const result = [];
    let start = 0, end = nums.length - 1, middle;

    if (nums[0] === 2) return [1];
    if (nums[0] === 3) return [1, 2];

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
        if (nums[middle] - middle === 3) end = middle - 1;
    };

    return Array.from(new Set(result));
};

const result1 = findNums(nums1);
const result2 = findNums(nums2);
const result3 = findNums(nums3);
const result4 = findNums(nums4);
const result5 = findNums(nums5);
const result6 = findNums(nums6);
const result7 = findNums(nums7);
const result0 = findNums(nums0);

console.log('1', result1);
console.log('2', result2);
console.log('3', result3);
console.log('4', result4);
console.log('5', result5);
console.log('6', result6);
console.log('6', result7);
console.log('0', result0);

// Task #2 :

// Сложность binerySearch алгоритма O(log2n).
// Так как в решении используем цикл while два раза, то сложность решения в наихудшем случае будет O(2 * log2n). 