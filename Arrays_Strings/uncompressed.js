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
    // used for comparison
    const numbers = '0123456789';
    let i = 0; 
    let j = 0; 

    while (j < str.length) {
        if (numbers.includes(str[j])) {
            j += 1;
        } else {
            // get number of times we need to print char, say 127 was our num, we need the entire num from i to j
            const range = Number(str.slice(i, j));
            for (let count = 0; count < range; count++) {
                ans += str[j];
            }
            j += 1;
            i = j;
        }
    }
    console.log(ans);
    return ans;
}
uncompress("2c3a1t");