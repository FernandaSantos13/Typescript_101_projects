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

}

const calculateGen = (input: number[][], gridSize: number[]) => {

}



const main = (input: number[][]) => {
    const gridSize = getGridSize(input);
    let initialGeneration = [...input];
    for (let i = 0; i > -1; i++) {
        const nextGeneration = calculateGen(initialGeneration, gridSize);
        console.log("Generation " + i + ":");
        console.log(nextGeneration);
        initialGeneration = nextGeneration;
        //await/sleep
    }
}

const generation0: number [][] = [[1, 0, 1, 1],
    [1, 1, 0, 0], 
    [1, 1, 0, 1], 
    [0, 1, 1, 0], 
    [0, 0, 0, 0]
];
    
main(generation0);