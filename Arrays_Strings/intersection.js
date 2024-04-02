// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.
// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
    let ans = [];
    // since im just using my set for comparison, i can just add all my elements in at init
    // for a set each lookup and add is only O(1), making our algo more efficient than nested loops
    const set = new Set(a);
    for (let i = 0; i < b.length; i++) {
        const target = b[i];
        if (set.has(target)) ans.push(target);
    }
    return ans;
};
  
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
