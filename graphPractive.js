function DFSGraph(graph, starter) {
    const stack = [starter];
    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node);
        for (let neighbor of graph[node]) {
            stack.push(neighbor);
        }
    }


}
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

DFSGraph(graph, 'a');