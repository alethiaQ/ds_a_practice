// given  an m x n matrix, return the ints in spiral order 
// 123     ---> [123698745]
// 456
// 789

// 4 pointer approach, top bottom left right
// iterate through the top row, add elements to array until we reach the end [123]leaving 456
//                                                                                        789
// increment the top variable, now its pointing at row 1
// iterate through top to bottom, update right (-1) variable since last column is done
// iterate through bottom row, right -> left, update bottom -1, since bottom row is done
// iterate from bottom to top at leftmost col, update left (+1)
// continue until our top meets our bottom and our left meets the right  

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function spiralMatrix(grid) {
    const ans = [];
    let top = 0;
    let left = 0; 
    let right = grid[0].length;
    let bottom = grid.length;

    console.log(right);
    while (left < right && top < bottom) {
        // iterate through top row  
        for (let i = left; i < right; i++) {
            ans.push(grid[top][i]);
        }
        top += 1; 
        // iterate through last col, from top to bottom
        for (let i = top; i < bottom; i++) {
            ans.push(grid[i][right - 1]);
        }
        right -= 1;
        // iterate bottom row, right to left
        for (let i = right; i > left; i--){
            if (!ans.includes(grid[bottom - 1][i])) {
                ans.push(grid[bottom - 1][i]);
            }  
        }
        bottom -= 1; 
        // iterate leftmost column, bottom to top 
        for (let i = bottom; i > top -1; i--) {
            ans.push(grid[i][left]);
        }
        left += 1;
    }
    console.log(ans);
}

spiralMatrix(grid);


