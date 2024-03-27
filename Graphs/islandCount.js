const grid =[
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];
//   given a grid or matrix, return the number of islands, where W is water and L is land
// 1st iterate through by row, col (r,c)
// track our visited position or node (r,c)
// check if our pos is L, if it is, run a search, mark off all the seen positions, return and increase our counts 

function islandCount(grid) {
    const seen = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r += 1){
        for (let c = 0; c < grid[0].length; c += 1) {
            if (explore(grid, r, c, seen) == true) {
                count += 1;
            } 
        }
    }
    console.log(count);
}

const explore = (grid, r, c, seen) => {
    // make sure r and c are in bounds of our grid 
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;
    // check if pos is land, if its water we don't need to travel 
    if (grid[r][c] == 'W') return false;
    // check description below for why we save our pos in string format
    const pos = r + ',' + 'c';
    if (seen.has(pos)) return false; 
    seen.add(pos);

    // now we are at unvisited piece of land, we need to explore all directions
    explore(grid, r - 1, c, seen); // up
    explore(grid, r + 1, c, seen); // down
    explore(grid, r, c - 1, seen); // left
    explore(grid, r, c + 1, seen); //right 

    // once we are down with our traversal, aka we explored an entire island, return true to count the island 
    return true;
}


islandCount(grid);





// pos string format -- for our set, we need to turn our positon into a string otherwise when checking later, we will get a false boolean returned when comparing with .has if we pass in an array literal, aka if we add to our set with [r,c] and then check later for comparison with .has([r,c]) we will get false even if it might be the same position, the set allocates different memory for its objects, so comparing with an array literal will search another place in memory... 