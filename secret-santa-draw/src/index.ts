// The secret santa challenge
/* 1- Receives an array with names givers01
2- Uses a function to shuffle names in the list and later it usesa second function to assign
each participant in the shuffled list to the one in the next position. 
 */
const shuffle = (input: string[]) => {
    const result = [...input];

    for (let i = 0; i < result.length; i++) {
        const j = Math.floor(Math.random() * result.length);
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result;
}

const main = (input: string[]) => {
    const shuffled = shuffle(input);

    const result = shuffled.map((value, index) => {
        return {
            giver: value,
            receiver: shuffled[index + 1] || shuffled[0]
        }
    });

    console.log(result);
}

const givers01 = ['Andre', 'Brad', 'Claudia', 'Denise', 'Emily', 'Fabby'];

main(givers01);