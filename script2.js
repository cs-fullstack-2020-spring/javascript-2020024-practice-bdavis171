function buddyFormatter(bName, bPosition){
let output = `Buddy #${bPosition} is ${bName}`;
return output;
}

let buddyList = [];
let userBuddy;
while (userBuddy != 'q'){
    userBuddy = prompt('Enter a new buddy name (Press q to quit):');
    if (userBuddy != 'q'){
        buddyList.push(userBuddy);
    }
}

for (let i=0;i<buddyList.length;i++){
    let buddyName = buddyList[i];
    let buddyNumber = buddyList.indexOf(buddyList[i]) + 1;
    console.log(buddyFormatter(buddyName,buddyNumber));
}