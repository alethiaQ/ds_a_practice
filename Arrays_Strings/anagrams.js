// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
    const set = new Set(s1);
    const set2 = new Set(s2); 
    let ans = false;
    set.size == set2.size ? ans = true : ans = false;
    console.log(ans);
}

anagrams('aaac', 'bc');