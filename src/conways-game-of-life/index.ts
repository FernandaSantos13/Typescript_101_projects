const updateCellStatus = (currentCellStatus: number, neighbourSum: number) => {
    if (currentCellStatus === 1 && neighbourSum > 3) {
        return 0;
    }
    if (currentCellStatus === 1 && neighbourSum < 2) {
        return 0;
    }
    if (currentCellStatus === 0 && neighbourSum === 3) {
        return 1;
    }
    return currentCellStatus;
} //Apply the conditions for updating the status of a cell 

const calculateNeighbourSum = (grid: number[][], rowIndex: number, colIndex: number) => {
    let neighbourSum = 0;
    //const gridSize = getGridSize(grid);
    for (let j = Math.max(rowIndex - 1, 0); j <= Math.min(rowIndex + 1, grid.length-1); j++) {
        for (let i = Math.max(colIndex - 1, 0); i <= Math.min(colIndex + 1, grid[0].length-1); i++) {
            if (i === colIndex && j === rowIndex) continue;
            neighbourSum += grid[j][i];
        }
    }
    return neighbourSum;
} // Calculates and return the sum of neighbors alive around the cell of interest


const calculateNextGeneration = (grid: number[][]) => {
    let nextGeneration: number[][] = grid.map(row => [...row]);
    grid.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const currentCellStatus = value;
            const neighbourSum: number = calculateNeighbourSum(grid, rowIndex, colIndex);
            const newCellStatus: number = updateCellStatus(currentCellStatus, neighbourSum);
            nextGeneration[rowIndex][colIndex] = newCellStatus;
        });
    });
    return nextGeneration;
}  // Calculates the next generation using the returns of functions calculateNeighbourSum() and updateCellStatus()


const main = (grid: number[][], generation = 0) => {
    console.log(`Generation: ${generation}`);
    console.log(grid);
    setTimeout(() => {
        const nextGeneration = calculateNextGeneration(grid);
        main(nextGeneration, generation=generation+1);
    }, 1000);
}

const generation0: number[][] = [[1, 0, 1, 1],
[1, 1, 0, 0],
[1, 1, 0, 1],
[0, 1, 1, 0],
[0, 0, 0, 0]
];

const generation0b: number[][] = [[0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0]
]

main(generation0);