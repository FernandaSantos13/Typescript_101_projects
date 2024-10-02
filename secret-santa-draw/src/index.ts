// The secret santa challenge
/* 1- Receives an array with names
2- Create an object array containing properties giver and receiver. Receivers will be assigned from loop 
3- Creates a function loop that iterate in each name of givers, assings a value to giver accordign to i,
gets the list of givers, remove the givers[i] and save to temp
4- sort a number from 0 to temp.length()-1 and save to drawedNum, receiverwill receive temp[num]. 
The loop ends by creating the array givers2 containing all individuals in givers except for the one 
assigned as receiver.
5- The loop stops when i<givers.length-2 (2 individuals not yet assigned as receivers) to avoid 
undefined values. 
 */
let givers= ['Andre', 'Brad', 'Claudia', 'Denise', 'Emily','Fabby'];
interface SecretSantaList {
    giver: string;
    receiver: string;
}
let secretSantaList:  SecretSantaList[] = [];

function drawInteger(length: number) {
    return Math.floor(Math.random() * length); // Generates a number between 0 and 5
}


let givers2=[...givers];
for (let i=0; i < givers.length-2; i++) {
    let temp=[...givers2];
    let j=temp.indexOf(givers[i])
        if (j > -1) {
            temp.splice(j,1); 
            };
    let size= temp.length;
    let drawedNum=drawInteger(size);
    secretSantaList.push({ giver: givers[i], receiver: temp[drawedNum]});
    let index= givers2.indexOf(temp[drawedNum]);
    givers2.splice(index,1);
}

if(givers[givers.length-1]==givers2[1]){
    secretSantaList.push({ giver: givers[givers.length-1], receiver: givers2[0]});
    secretSantaList.push({ giver: givers[givers.length-2], receiver: givers2[1]}); 
} else {
    for (let i=givers.length-2; i < givers.length; i++) {
    let temp=[...givers2];
    let j=temp.indexOf(givers[i]);
        if (j > -1) {
            temp.splice(j,1); 
            };
    let size= temp.length;
    let drawedNum=drawInteger(size);
    secretSantaList.push({ giver: givers[i], receiver: temp[drawedNum]});
    let index= givers2.indexOf(temp[drawedNum]);
    givers2.splice(index,1);
    }
}

console.log(secretSantaList);