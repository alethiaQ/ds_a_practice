// given an array of unsorted ints, return the length of the longest sequence
// nums [0,3,7,2,5,8,4,6,0,1] -> 9 
//
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
function longestSequence(nums) {
    if(nums.length == 0) return 0;
    const set = new Set(nums); 

    let longestStreak = 1; 
    for (const num of set.values()) {
        if (!set.has(num-1) && set.has(num+1)) {
            let k = 1;
            while (set.has(num + k)) { k++ }
            longestStreak = Math.max(longestStreak, k)
       }
    }
    console.log(longestStreak);
}

longestSequence(nums);