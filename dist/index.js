"use strict";
let givers = ['Andre', 'Brad', 'Claudia', 'Denise', 'Emily', 'Fabby'];
let secretSantaList = [];
function drawInteger(length) {
    return Math.floor(Math.random() * length);
}
let givers2 = [...givers];
for (let i = 0; i < givers.length - 2; i++) {
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
if (givers[givers.length - 1] == givers2[1]) {
    secretSantaList.push({ giver: givers[givers.length - 1], receiver: givers2[0] });
    secretSantaList.push({ giver: givers[givers.length - 2], receiver: givers2[1] });
}
else {
    for (let i = givers.length - 2; i < givers.length; i++) {
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
}
console.log(secretSantaList);
