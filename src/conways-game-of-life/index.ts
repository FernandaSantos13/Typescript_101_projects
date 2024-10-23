/* 1- ler meu input and save its dimensions to a variable (gridSize)
2- Create a copy of my input which can be modified (initialGeneration)
3-  Give the copy and gridSize to a function which will calculate edit and return the final array
4-  The main funstion will print to the console the final array and save it to the variable initialGeneration, 
so the loop can re-start 
5- To wait 1s between generations, use await/sleep from (Andre's e-mail)
6- Still thinking about the function to calculate next generation, but it might be something related to: for 
each element of array get the sum of cells around and test conditions to see if the element will receive 0 or 1.
The conditions to be tested are:
    a) if cell =1 AND sum<2, cell = 0
    b) if cell =1 AND sum>3, cell = 0
    c) if cell = 0 AND sum = 3, cell = 1
    d) else cell = cell
IMPORTANT: I will probably have to create a new array to push the new elements to it. Otherwise it can change the sum 
of the other elements!!! 
*/

/*const getGridSize = (input: number[][]) => {
    const maxX = input[0].length;
    const maxY = input.length;
    return { maxX, maxY }
}*/

//type Grid = ReturnType<typeof getGridSize>;

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
}

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
}


const calculateGen = (input: number[][]) => {
    let result: number[][] = [...input];
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
} //error is here! 

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