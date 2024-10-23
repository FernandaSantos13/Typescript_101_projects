const updatedStatus = (x: number, y: number, cell: number, sum: number) => {
    if (cell === 1 && sum > 3) {
        return 0;
    }
    else if (cell === 1 && sum < 2) {
        return 0;
    }
    else if (cell === 0 && sum === 3) {
        return 1;
    }
    else {
        return cell;
    }
} //Apply the conditions for updating status of a cell 

const calcSum = (input: number[][], x: number, y: number) => {
    let toBeSummed: number[] = [
        input[y-1]?.[x+1],
        input[y]?.[x+1],
        input[y+1]?.[x+1],
        input[y+1]?.[x],
        input[y+1]?.[x-1],
        input[y]?.[x-1],
        input[y-1]?.[x-1],
        input[y-1]?.[x]   
    ];
    const toBeSummedClean = toBeSummed.filter(value => value !== undefined);
    let sum = 0;
    for (const value of toBeSummedClean) {
        sum += value;    
    }
    return sum;    
} // Calculates and return the sum of neighbors alive around the cell of interest


const calculateGen = (input: number[][]) => {
    let result: number[][] = input.map(row => [...row]);
    input.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const cell = value;
            const y = rowIndex;
            const x = colIndex;
            const sum: number = calcSum(input, x, y);
            const newStatus: number = updatedStatus(x, y, cell, sum);
            result[y][x] = newStatus;
        });
    });
    return result;
}  // Calculates the next generation using the returns of functions calcSum() and updatedStatus()

function sleep(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
}


const main = (input: number[][]) => {
    //const gridSize = getGridSize(input);
    let initialGeneration = [...input];
    console.log("Generation 0:");
    console.log(initialGeneration);
    async function startLoop() {
        let i = 1;
        while (true) {
            const nextGeneration = calculateGen(initialGeneration);
            console.log("Generation " + i + ":");
            console.log(nextGeneration);
            initialGeneration = nextGeneration;
            await sleep(1000);
            i++;
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