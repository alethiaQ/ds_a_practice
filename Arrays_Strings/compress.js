// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (str) => {
    const ans = [];
    let i = 0; 
    for (let j = 0; j < str.length + 1; j++) {
        const count = j - i;
        if (!(str[j] == str[i])) {
            count == 1 ? ans.push(str[i]) : ans.push(count + str[i]);
            i = j;
        }
    }
    console.log(ans.join(''));
    return ans.join('')
};

compress('ccaaatsss'); // 2c3a1t3s