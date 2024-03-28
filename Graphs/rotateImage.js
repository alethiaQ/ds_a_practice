// given an n x m matrix, rotate the image in place by 90 degrees
// we can achieve this by swapping out positions, keeping track of a temp variable then reversing our subarrays 
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //[[7,4,1],[8,5,2],[9,6,3]]
// swapping places, after first iteration -> 1 4 3, 2 56, 789, where the 2 (matrix [i][j]) and the 4 (matrix[j][i]) were swapped
// 2nd => 147, 256, 389
//  we are simply swapping positions, but we will need to reverse the subarrays to "change their direction" aka at the end of our iterations our first subarray is 147, but we need to reverse it to be 741 
const rotateImage = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++){
            let temp = matrix[i][j]; //2
            matrix[i][j] = matrix[j][i]; //4
            matrix[j][i] = temp;
            console.log(matrix);
        }
    }
    // reverse the orders of our subarrays 
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].reverse();
    }
    console.log(matrix);
}

rotateImage(matrix);