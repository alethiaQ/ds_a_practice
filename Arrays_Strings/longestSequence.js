// given an array of unsorted ints, return the length of the longest sequence
// nums [0,3,7,2,5,8,4,6,0,1] -> 9 
//
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
function longestSequence(nums) {
    const set = new Set(); 
    for (let num in nums) {
        // console.log(num);
        set.add(num);
    }
    let longestStreak = 0; 
    for (let num of set) {
        // let pos = `${parseInt(num) - 1}`;
        // console.log(set.has(pos))
        // console.log(pos);
        if (!set.has(`${parseInt(num) - 1}`)) {
            let currentNum = num; 
            let currentStreak = 1; 
            // console.log(parseInt(currentNum + 1));
            console.log(set);
            // console.log(parseInt(currentNum) + 1); 
            while (set.has(`${parseInt(currentNum) + 1}`)) {
                currentNum++; 
                currentStreak ++;
            }
            currentStreak > longestStreak ? longestStreak = currentStreak : longestStreak;
        }
    }
    console.log(longestStreak - 1);
}

longestSequence(nums);