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

// BFSGraph(graph, 'a');

// source and destination problems, aka given a src n, does dest k exist on it's path 
// O(e) where e is # of edges 
function findPathToK(src, dest, graph) {
    let ans = false;
    const stack = [src]; 
    while (stack.length > 0) {
        const node = stack.pop();
        if (node == dest) ans = true; 
        for (let neighbor of graph[node]) {
            stack.push(neighbor);
        }
    }
    console.log(ans);
}

function findPathRecursive(src, dest, graph) {
    if (src == dest) console.log(true); 
    for (let neighbor of graph[src]) {
        findPathRecursive(neighbor, dest, graph)
    }
}
const kGraph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

findPathRecursive('f', 'k', kGraph);