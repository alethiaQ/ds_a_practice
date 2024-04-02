// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

const mostFrequentChar = (s) => {
    if (s.length == 1) return s;
    let count = new Map();
    let max = 0;
    let ans = '';
    for (let c of s) {
        if (count.has(c)) {
            count.set(c, count.get(c) + 1);
        } else {
            count.set(c, 1);
        }
    }

    for (let item of count) {
        const [char, count] = item;
        if (count > max) {
            max = count;
            ans = char;
        }
    }
    return ans;
    // console.log(count);
}

console.log(mostFrequentChar('bookeeper'));