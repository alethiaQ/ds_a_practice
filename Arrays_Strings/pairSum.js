// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.Be sure to return the indices, not the elements themselves. There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
    let ans = [];
    const map = new Map();
    for (let i = 0; i < numbers.length; i++) { 
        map.set(numbers[i], i);
    };

    for (let i = 0; i < numbers.length; i++) {
        const target = targetSum - numbers[i];
        if (map.has(target) && map.get(target) != i) {
            ans.push(i);
            ans.push(map.get(target));
            return ans;
        }
    }
    console.log(ans);
    return ans;
}

 // -> [0, 2]
console.log(pairSum([3, 2, 5, 4, 1], 8))
