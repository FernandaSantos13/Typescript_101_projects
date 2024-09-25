// The secret santa challenge
/* 1- Create an array with names
2- Create an object array contain properties giver and receiver. Receivers will be assigned from loop
3- Create a function loop that iterate in each name of givers, assing value to giver, gets the list of givers, remove the givers[i] and save to temp, 
sort a number from 1-temp.length() and save to num, receiver: temp[num]. Create an array givers2 containing givers[-temp[num]] 
 */
const givers: string[]= ['Andre', 'Brad', 'Claudia', 'Denise', 'Emily','Fabby'] as const;
interface SecretSantaList {
    giver: string;
    receiver: string;
}
const secretSantaList:  SecretSantaList[] = [];

function drawInteger(length: number): number {
    return Math.floor(Math.random() * length); // Generates a number between 0 and 5
}


let givers2: string[]=[...givers];
for (let i=0; i < givers.length; i++) {
    //console.log(i);
    let temp:string[]=[...givers2];
    //console.log(`Temp is ${temp}`);
    let j:number=temp.indexOf(givers[i])
    //console.log(`j is ${j}`)
        if (j > -1) {
            temp.splice(j,1); 
            };
    //console.log(`Temp after splice is ${temp}`);
    let size: number= temp.length;
    //console.log(`Size is ${size}`);
    let drawedNum: number=drawInteger(size);
    //console.log(`Drawed number is ${drawedNum}`)
    secretSantaList.push({ giver: givers[i], receiver: temp[drawedNum]});
    //console.log(`Receiver: ${temp[drawedNum]}`)
    let index:number = givers2.indexOf(temp[drawedNum]);
    givers2.splice(index,1);
    //console.log(`givers2 after splice is ${givers2}`)
}
console.log(secretSantaList);