const updateCellStatus = (x: number, y: number, currentCellStatus: number, neighbourSum: number) => {
    if (currentCellStatus === 1 && neighbourSum > 3) {
        return 0;
    }
    else if (currentCellStatus === 1 && neighbourSum < 2) {
        return 0;
    }
    else if (currentCellStatus === 0 && neighbourSum === 3) {
        return 1;
    }
    else {
        return currentCellStatus;
    }
} //Apply the conditions for updating the status of a cell 

const calculateNeighbourSum = (grid: number[][], x: number, y: number) => {
    let toBeSummed: number[] = [
        grid[y-1]?.[x+1],
        grid[y]?.[x+1],
        grid[y+1]?.[x+1],
        grid[y+1]?.[x],
        grid[y+1]?.[x-1],
        grid[y]?.[x-1],
        grid[y-1]?.[x-1],
        grid[y-1]?.[x]   
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
            const y = rowIndex;
            const x = colIndex;
            const neighbourSum: number = calculateNeighbourSum(grid, x, y);
            const newCellStatus: number = updateCellStatus(x, y, currentCellStatus, neighbourSum);
            nextGeneration[y][x] = newCellStatus;
        });
    });
    return nextGeneration;
}  // Calculates the next generation using the returns of functions calculateNeighbourSum() and updateCellStatus()

function sleep(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
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