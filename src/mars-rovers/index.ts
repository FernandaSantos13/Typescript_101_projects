const createPlateau = (input: string[]) => {
    const maxX = parseInt(input[0]);
    const maxY = parseInt(input[1]);
    return { maxX, maxY };
}

type Plateau = ReturnType<typeof createPlateau>;
type Rover = ReturnType<typeof readInitialPosition>;

const readInitialPosition = (position: string[], moves: string, plateau: Plateau) => {
    const x = parseInt(position[0]);
    const y = parseInt(position[1]);

    if (x > plateau.maxX || y > plateau.maxY || x < 0 || y < 0) {
        throw new Error("Out of bounds.");
    }
    const dir = position[2];

    if (!cardinals.includes(dir)) {
        throw new Error("Invalid direction.");
    }

    return { x, y, dir, moves }
}

const cardinals = ['N', 'E', 'S', 'W'];


const rotateLeft = (input: string) => {
    const index = cardinals.indexOf(input);

    if (index === 0) {
        return cardinals[cardinals.length - 1]
    }

    return cardinals[index - 1];
}


const rotateRight = (input: string) => {
    const index = cardinals.indexOf(input);

    if (index === cardinals.length - 1) {
        return cardinals[0]
    }

    return cardinals[index + 1];
}

const moveForward = (x: number, y: number, dir: string) => {
    if (dir === 'W') {
        return { newX: x - 1, newY: y }
    }

    if (dir === 'E') {
        return { newX: x + 1, newY: y }
    }

    if (dir === 'N') {
        return { newX: x, newY: y + 1 }
    }

    if (dir === 'S') {
        return { newX: x, newY: y - 1 }
    }

    return { newX: x, newY: y }

}

const executeMoves = (rover: Rover, plateau: Plateau) => {
    let { dir, x, y } = rover;

    for (const move of rover.moves) {
        if (move === 'R') {
            dir = rotateRight(dir);
        };

        if (move === 'L') {
            dir = rotateLeft(dir);
        };

        if (move === 'M') {
            const { newX, newY } = moveForward(x, y, dir);
            
            if (newX > plateau.maxX || newY > plateau.maxY || newX < 0 || newY < 0) {
                return { x, y, dir };
            }

            x = newX;
            y = newY;
        };
    } 
    return `${x} ${y} ${dir}`;
}

const mainRover = (input: string[]) => {
    const plateau = createPlateau(input[0].split(" "));
    const rovers: Rover[] = [];

    for (let i = 1; i < input.length; i = i + 2) {
        const position = input[i].split(" ");
        const moves = input[i + 1];
        try {
            rovers.push(readInitialPosition(position, moves, plateau));
        } catch (error) {
            console.log(error)
        };
    }

    for (const rover of rovers) {
        const finalPosition = executeMoves(rover, plateau);
        console.log(finalPosition)
    }
}

const input1 = [
    "5 5",
    "1 2 N",
    "LMLMLMLMM",
    "3 3 E",
    "MMRMMRMRRM",
    "2 5 W",
    "MLMLLRMMM"
]

mainRover(input1);