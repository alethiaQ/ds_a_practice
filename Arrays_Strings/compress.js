// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

const compress = (str) => {
    
    let i = 0; 
    let j = 0; 
    let ans = [];

    while (j < str.length) {
        const count = j - i;
        if (j == str.length - 1) {
            ans.push(count + str[i]);
            j += 1;
        } else if (str[i] == str[j]) {
            j += 1;
         } else {
            count == 1 ? ans.push(str[i]) : ans.push(count + str[i]);
            i = j;
            j += 1;
        }
    }
    console.log(ans.join(''));
    return ans.join('')
};

compress('ccaaatsss'); // 2c3a1t3s