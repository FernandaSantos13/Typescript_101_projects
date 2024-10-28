const updateCellStatus = (currentCellStatus: number, neighbourSum: number) => {
    if (currentCellStatus === 1 && neighbourSum > 3) {
        return 0;
    }
    else if (currentCellStatus === 1 && neighbourSum < 2) {
        return 0;
    }
    else if (currentCellStatus === 0 && neighbourSum === 3) {
        return 1;
    }
    return currentCellStatus;
} //Apply the conditions for updating the status of a cell 

const calculateNeighbourSum = (grid: number[][], colIndex: number, rowIndex: number) => {
    let neighbourSum = 0;
    for (let i = colIndex - 1; i <= colIndex + 1; i++) {
        for (let j = rowIndex - 1; j <= rowIndex + 1; j++) {
            if (i === colIndex && j === rowIndex) continue;
            if (i >= 0 && i < grid[0].length && j >= 0 && j < grid.length) {
                neighbourSum += grid[j][i];
            }
        }
    }
    return neighbourSum;
} // Calculates and return the sum of neighbors alive around the cell of interest


const calculateNextGeneration = (grid: number[][]) => {
    let nextGeneration: number[][] = grid.map(row => [...row]);
    grid.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const currentCellStatus = value;
            const neighbourSum: number = calculateNeighbourSum(grid, colIndex, rowIndex);
            const newCellStatus: number = updateCellStatus(currentCellStatus, neighbourSum);
            nextGeneration[rowIndex][colIndex] = newCellStatus;
        });
    });
    return nextGeneration;
}  // Calculates the next generation using the returns of functions calculateNeighbourSum() and updateCellStatus()



const main = (grid: number[][]) => {
    let initialGeneration = [...grid];
    console.log("Generation 0:");
    console.log(initialGeneration);
    let generationCount = 1;
    const intervalId = setInterval(() => {
        const nextGeneration = calculateNextGeneration(initialGeneration);
        console.log("Generation " + generationCount + ":");
        console.log(nextGeneration);
        initialGeneration = nextGeneration;
        generationCount++;
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

main(generation0b);