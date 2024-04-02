// Write a function, fiveSort, that takes in an array of nums as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.
// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
// two pointer approach, left and right, right starts at last index, left at the first
// while left < right 
// iterate right until we land on a non-5, then iterate left until we land on a five, swap indexes 
// iterate until left !< right

const fiveSort = (nums) => {
    let left = 0; 
    let right = nums.length - 1; 

    while (left < right) {
        if (nums[right] == 5) {
            right--;
        }
        if (nums[left] != 5) {
            left++;
        } else {
            let placeholder = nums[left];
            nums[left] = nums[right];
            nums[right] = placeholder;
        }
   
    }
    return nums;
};

// console.log(fiveSort([12, 5, 1, 5, 12, 7])); //  [12, 7, 1, 12, 5, 5] 
console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
