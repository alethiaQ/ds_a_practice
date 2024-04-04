// You are given an array of integers in which every element appears twice, except for one. Find the element that only appears one time. Your solution should have a linear runtime complexity (O(n)). Try to implement it without using extra memory.

function solution(nums) {
    // 'use strict'
    let res = 0;
    for (let num of nums) {
        console.log(res);
      res = res ^ num;
    }
    return res;
}
console.log(solution([2,2,1]));
// res ^ num -> 0 2 0 1
//  => 0 ^ 2 = 2 
// 2 ^ 2 = 0 
// 0 ^ 1 = 1
// console.log(solution([123456789, 836133896, 65475264, 836133896, 746254373, 1000000000, 542627588, 1000000000, 444088605, 65475264, 746254373, 542627588, 444088605]));