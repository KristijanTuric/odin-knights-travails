// Generate adjacency list for a chessboard of boardSize
function generateKnightAdjacencyList (boardSize) {

    // All the moves a knight can make [move on x, move on y]
    const knightsMoves = [
        [-2, 1], [-1, 2], [1, 2], [2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let knightAdjacencyList = Array.from({ length: boardSize }, () => 
        Array.from({ length: boardSize }, () => [])
    );

    for (let x = 0; x < boardSize; x++) {
        for (let y = 0; y < boardSize; y++) {
            for (let [dx, dy] of knightsMoves) {
                let newX = x + dx;
                let newY = y + dy;
                if ((newX >= 0 && newX < boardSize ) && (newY >= 0 && newY < boardSize)) {
                    knightAdjacencyList[x][y].push([newX, newY]);
                }
            }
        }
    }

    return knightAdjacencyList;
}

function knightMoves (startPosition, endPosition, boardSize) {
    if (startPosition < 0 || startPosition > 7 || endPosition < 0 || endPosition > 7) {
        throw new Error("Start or End positions are not within chessboard limit!");
    }

    let knightAdjacencyList = generateKnightAdjacencyList(boardSize);

    let visitedNodes = Array.from({ length: boardSize }, () => 
        Array.from({ length: boardSize }, () => false)
    );
    let nodeQueue = [];

    nodeQueue.push([[startPosition[0], startPosition[1]], 0, [startPosition]]);
    visitedNodes[startPosition[0]][startPosition[1]] = true;

    while (nodeQueue.length > 0) {
        let [currentNode, moves, path] = nodeQueue.shift();

        if (currentNode[0] === endPosition[0] && currentNode[1] === endPosition[1]) {
            console.log("\nThe end position was reached!\n");
            console.log("\nSteps: " + moves);
            console.log("\nPath:", path);
            break;
        }

        for (let linkedNode of knightAdjacencyList[currentNode[0]][currentNode[1]]) {
            // Only push the node if it has not been visited before
            if (!visitedNodes[linkedNode[0]][linkedNode[1]]) {
                nodeQueue.push([linkedNode, moves + 1, [...path, linkedNode]]);
                visitedNodes[linkedNode[0]][linkedNode[1]] = true;
            }
        }
    }
}

export default knightMoves;