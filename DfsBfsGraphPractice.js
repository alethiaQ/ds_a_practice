function DFSGraph(graph, starter) {
    const stack = [starter];
    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node);
        for (let neighbor of graph[node]) {
            stack.push(neighbor);
        }
    }


};

function DFSGraphRecursive(graph, starter) {
    console.log(starter);
    for (let neighbor of graph[starter]) {
        DFSGraphRecursive(graph, neighbor)
    }
}
// adjacency list 
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// DFSGraphRecursive(graph, 'a');

function BFSGraph(graph, starter) {
    const queue = [starter];
    while (queue.length > 0) {
        const node = queue.shift();
        console.log(node);
        for (let neighbor of graph[node]) {
            queue.push(neighbor);
        }
    }
}

BFSGraph(graph, 'a');