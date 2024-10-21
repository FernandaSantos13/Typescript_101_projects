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

const getGridSize = (input: number[][]) => {
    const maxX = input[0].length;
    const maxY = input.length;
    return { maxX, maxY }
}

type Grid = ReturnType<typeof getGridSize>;

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

const calcSum = (input: number[][], x: number, y: number, gridSize: Grid) => {
    //let tobesummed: number[] = [];
    //if () {}
    const sum = input[x-1][y+1] + input[x][y+1] + input[x+1][y+1] + input[x-1][y] + input[x+1][y] + input[x-1][y-1] 
    + input[x][y-1] + input[x+1][y-1];
    return sum;
} // Think/test what happens if the position is outof bounds. Work on thAT 


const calculateGen = (input: number[][], gridSize: Grid) => {
    let result: number[][] = [...input];
    input.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const cell = value;
            const x = rowIndex;
            const y = colIndex;
            const sum: number = calcSum(input, x, y, gridSize);
            const newStatus: number = updatedStatus(x, y, cell, sum);
            result[x][y] = newStatus;
        });
    });
    return result;
}

const main = (input: number[][]) => {
    const gridSize = getGridSize(input);
    let initialGeneration = [...input];
    for (let i = 0; i > -1; i++) {
        const nextGeneration = calculateGen(initialGeneration, gridSize);
        console.log("Generation " + i + ":");
        console.log(nextGeneration);
        initialGeneration = nextGeneration;
        //await sleep(1000);
    }
}

const generation0: number[][] = [[1, 0, 1, 1],
[1, 1, 0, 0],
[1, 1, 0, 1],
[0, 1, 1, 0],
[0, 0, 0, 0]
];

main(generation0);