const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']];

function undirectedGraph(edges, src, dest) {
    // turn edges into adjaceny list 
    // check path with dfs/bfs
    // make sure to mark as seen
    const graph = getGraph(edges);
    // create new set to capture seen nodes, avoiding cycles
    const ans = hasPath(graph, src, dest, new Set());
    console.log(ans);
}
// takes in edges, returns an adjacency list, graph = {i: []..}
function getGraph(edges) {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge; 
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a);
    }
    return graph;
}

function hasPath(graph, src, dest, seen) {
    let ans = false;
    // if node is in seen set, no need to go through all of its neighbors again
    if (src == dest) ans = true; 
    if (seen.has(src)) return false; 
    seen.add(src);
    for (let node of graph[src]) {
        // console.log(node);
        if(hasPath(graph, node, dest, seen) == true) ans = true;
    }
    return ans;
}
undirectedGraph(edges, 'i', 'k');