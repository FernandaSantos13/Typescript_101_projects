# My first JavaScript projects

This project contains a set of challenges I executed while learning Typescript.

The first challenge is 1) The Secret Santa Coding Challenge (secret-santa-draw) which is a program that randomly assigns each participant in a list to another participant as their Secret Santa. Each participant should give a gift to exactly one other participant and receive a gift from exactly one other participant. Input should be added to variable givers01 in the end of file src/secret-santa-draw/index.ts.

The second challenge is 2) The MARS Rover Coding Challenge (mars-rovers) which is a program that receives a set of coordinates for the size of a plateau and coordinates and list of movements for 1 or more rovers. The program then uses these coordinates and plateau size to calculate the final position of the rovers after executing the movements specified in the input. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.
'M' means move forward one grid point, and maintain the same heading.
Input should be added to variable input1 in the end of file src/mars-rovers/index.ts.

The third challenge is 3)The Conway's game of life (conways-game) which simulates a finite two-dimensional orthogonal grid of square cells, each of which (at any given time) is in one of two possible states, "live" or "dead". Every cell interacts with its neighbours, which are the cells that are directly horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
Any live cell with fewer than two live neighbours dies (referred to as underpopulation).
Any live cell with more than three live neighbours dies (referred to as overpopulation).
Any live cell with two or three live neighbours lives, unchanged, to the next generation.
Any dead cell with exactly three live neighbours will come to life.
Based on these rules, the program implements the game of life in an infinite loop - each loop is called "generation", and print the generation to the console when after waiting 1 second. 
Input should be added to variable generation0 in the end of file src/conways-game-of-life/index.ts.