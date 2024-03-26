// given an array of edges, return the shortest path from point x to y
// shortest path will be the least amount of edges between x and y 
// first create an adjancency list from edges 
// we need set to track our visited nodes (seen) to avoid cyclic behavior, undirected graph 
// create a queue to track node and distance from starting point (node, distance) (w, 0) where w is node and since it is the starting point, its 0 away from start 
// we need to track our distance 
// when a node leaves the queue and adds its neighbors we need to increase our count, which represents distance
// compare node to destination or y, when we hit it, return the distance.. since we are running a bfs this number should be the shortest path 
function shortestPath(edges, x, y) {
    const seen = new Set([x]);
    const graph = getGraph(edges);
    const ans = bfs(graph, seen, x, y);
    console.log(ans);
}
const bfs = (graph, seen, x, y) => {
    const queue = [[x, 0]];
    let ans = 0;
    while (queue.length > 0) {  
        let [node, distance] = queue.shift();
        if (node === y) {return ans = distance};
        
        
        for (let neighbor of graph[node]) {
            if (!(seen.has(neighbor))) {
                seen.add(neighbor);
                queue.push([neighbor, distance +1]);
            }
        }
    }
    return ans;
}
const getGraph = (edges) => {
    const graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges = [['w', 'x'], ['x', 'y'], ['z', 'y'], ['z', 'v'], ['w', 'v']];

shortestPath(edges, 'w', 'z');