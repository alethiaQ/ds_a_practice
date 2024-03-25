const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']];


function undirectedGraph(edges, src, dest) {
    // turn edges into adjaceny list 
    // check path with dfs/bfs
    // make sure to mark as seen
    const graph = getGraph(edges);
    console.log(graph);
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

undirectedGraph(edges, 'i', 'o');