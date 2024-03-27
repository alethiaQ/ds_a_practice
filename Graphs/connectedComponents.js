// takes in an adjacency list, return the number of connected components 
// need to iterate through nodes 
// then run a traversal on each node and check all its connections 
// mark nodes that are seen
// once a node and its connections has been fully checked, increase our count then move on 

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}; 
function connectedComponentsCount(graph) {
    const seen = new Set(); 
    let count = 0; 
    for (let node in graph) { 
        // once we get a true value, that means all of our node's neighbors have been explored, therefore we can add to our count
        if (exploreNodes(graph, node, seen) === true) {
            count += 1;
        }
    }
    console.log(count);
}

const exploreNodes = (graph, current, seen) => {
    if (seen.has(String(current))) return false; 
    seen.add(String(current));
    for (let neighbor of graph[current]) {
        exploreNodes(graph, neighbor, seen);
    }
    return true;
}

connectedComponentsCount(graph);