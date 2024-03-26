// Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land. You may assume that the grid contains at least one island.


const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];
  
function minimumIsland(grid) {
    const seen = new Set();
    let minSize = Infinity; 

    for (let r = 0; r < grid.length; r += 1){
        for (let c = 0; c < grid[0].length; c += 1) {
            let size = explore(grid, r, c, seen);
            size < minSize && size > 0 ? minSize = size : size;
        }
    }
    console.log(minSize);
}

const explore = (grid, r, c, seen) => {
    // check bounds 
    const rowBounds = 0 <= r && r < grid.length;
    const colBounds = 0 <= c && c < grid[0].length; 
    if (!rowBounds || !colBounds) return 0; 

    // check if W or L
    if (grid[r][c] == 'W') return 0; 

    // check if visted or not 
    const pos = r + ',' + c;
    if (seen.has(pos)) return 0; 
    seen.add(pos); 

    // traverse each and add size 
    let size = 1; 
    size += explore(grid, r - 1, c, seen); 
    size += explore(grid, r + 1, c, seen);
    size += explore(grid, r, c - 1, seen);
    size += explore(grid, r, c + 1, seen); 
    return size; 

}
minimumIsland(grid);