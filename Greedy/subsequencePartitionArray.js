// Given an integer array nums and an integer k, split nums into subsequences, where each subsequences' maximum and minimum element is within k of each other. What is the minimum number of subsequences needed?

// For example, given nums = [3, 6, 1, 2, 5] and k = 2, the answer is 2. The subsequences are [3, 1, 2] and [6, 5]
const partitionArray = (nums, k) => {
    const sorted = nums.sort((a, b) => a - b)
    let ans = 1;
    let x = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - x > k) {
            x = sorted[i];
            ans++;
        }
    }
    console.log(ans);
    return ans; 
}
const nums = [3, 6, 1, 2, 5];
nums.toString().re
const k = 2; 

partitionArray(nums, k); 