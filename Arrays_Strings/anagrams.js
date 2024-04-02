// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
    if (!(s1.length == s2.length)) return false;
    let s1s = s1.split('').sort();
    let s2s = s2.split('').sort();
    for (let i = 0; i < s1.length; i++) {
      if (s1s[i] != s2s[i]) return false
    }
    return true;
}

const answer = anagrams('cats', 'tocs');
console.log(answer);