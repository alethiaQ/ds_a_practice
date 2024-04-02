// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:
// <number><char> for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// want to use two pointers 
// i and j, i starts at 0, increment j until we find a character, i.e if the number is 234 if we just printed 2 than 3 than 4 of the letter, we wouldnt get the right  answer, we need to find the full number, so use the the two pointers to increment until we find a character
// print that character, then incremenet i until we hit the next char, if any
// then the cycle repeats

// psuedo 
// iterate i until str length
// iterate j until str length
// if str[j] != character, keep iterting j
// if str[j] == character, add number amount of character we landed on to ans 
// increment i until we land on next number 
// continue until we reach the end of str
// return str

const uncompress = (str) => {
    let ans = '';
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (typeof str[j] === 'character') {
                for (let k = 0; k < num; k++) {
                    ans += str[j];
                }
                num = 0;
            } else {
                num += str[j];
            }
        }
        console.log(ans);
    }
}
uncompress("2c3a1t");