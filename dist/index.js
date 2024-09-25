"use strict";
const givers = ['Andre', 'Brad', 'Claudia', 'Denise', 'Emily', 'Fabby'];
const secretSantaList = [];
function drawInteger(length) {
    return Math.floor(Math.random() * length);
}
let givers2 = [...givers];
for (let i = 0; i < givers.length; i++) {
    let temp = [...givers2];
    let j = temp.indexOf(givers[i]);
    if (j > -1) {
        temp.splice(j, 1);
    }
    ;
    let size = temp.length;
    let drawedNum = drawInteger(size);
    secretSantaList.push({ giver: givers[i], receiver: temp[drawedNum] });
    let index = givers2.indexOf(temp[drawedNum]);
    givers2.splice(index, 1);
}
console.log(secretSantaList);
