// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
    let ans = true;
    if (!(s1.length == s2.length)) return false;
    let s1s = s1.split('').sort();
    let s2s = s2.split('').sort();
    s2s === s1s ? ans = true : ans;
    return ans;
}

const answer = anagrams('elbw', 'below');
console.log(answer);