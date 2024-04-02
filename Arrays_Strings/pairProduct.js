// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.
// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

const pairProduct = (numbers, targetProduct) => {
    let ans = [];
    const map = new Map();
    for (let num = 0; num < numbers.length; num++) {
        map.set(numbers[num], num);
    }
    for (let i = 0; i < numbers.length; i++) {
        const target = targetProduct / numbers[i]; 
        if (map.has(target) && map.get(target) != i) {
            ans.push(i);
            ans.push(map.get(target));
            return ans;
        }
    }
    return ans;
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]