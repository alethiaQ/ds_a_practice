// given an adjancency list, return the largest component 
// iterate through nodes, mark as seen, keep count of nodes in island
const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

function largestComponent(graph) {
    const seen = new Set();
    let maxCount = 0; 
    for (let node in graph) {
        const count = exploreNodes(graph, node, seen, 1);
        // console.log(count);
        count > maxCount ? maxCount = count : maxCount;
    }
    console.log(maxCount);
}

function exploreNodes(graph, current, seen, count) {
    if (seen.has(String(current))) return count;
    seen.add(String(current)); 
    for (let neighbor of graph[current]) {
        count += 1; 
        exploreNodes(graph, neighbor, seen, count)
    }
    return count;
}

largestComponent(graph);