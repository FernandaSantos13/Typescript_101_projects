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
    const toBeSummed: number[] = [
        grid[rowIndex-1]?.[colIndex+1],
        grid[rowIndex]?.[colIndex+1],
        grid[rowIndex+1]?.[colIndex+1],
        grid[rowIndex+1]?.[colIndex],
        grid[rowIndex+1]?.[colIndex-1],
        grid[rowIndex]?.[colIndex-1],
        grid[rowIndex-1]?.[colIndex-1],
        grid[rowIndex-1]?.[colIndex]   
    ];
    const toBeSummedClean = toBeSummed.filter(value => value !== undefined);
    let neighbourSum = 0;
    for (const value of toBeSummedClean) {
        neighbourSum += value;    
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

function sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


const main = (grid: number[][]) => {
    let initialGeneration = [...grid];
    console.log("Generation 0:");
    console.log(initialGeneration);
    async function startLoop() {
        let generationCount = 1;
        while (true) {
            const nextGeneration = calculateNextGeneration(initialGeneration);
            console.log("Generation " + generationCount + ":");
            console.log(nextGeneration);
            initialGeneration = nextGeneration;
            await sleep(1000);
            generationCount++;
        }
    }
    startLoop();
}

const generation0: number[][] = [[1, 0, 1, 1],
[1, 1, 0, 0],
[1, 1, 0, 1],
[0, 1, 1, 0],
[0, 0, 0, 0]
];

main(generation0);