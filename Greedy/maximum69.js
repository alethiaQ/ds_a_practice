// You are given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

const maximum69Number = (nums) => {
    const num = nums.toString();

    for (let i = 0; i < num.length; i++) { 
        if (num[i] === '6') {
            return parseInt(num.substring(0, i) + '9' + num.substring(i + 1))
        }
    }
    return num;
}