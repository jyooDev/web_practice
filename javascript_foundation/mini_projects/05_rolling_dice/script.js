
const diceCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

function rollDice(){
    let roll = Math.ceil(Math.random()*6);
    // console.log(`dice num: ${num}`);
    diceCount[roll]++;
}


function displayScore(){
    for (const roll in diceCount){
        console.log(`${roll}: ${diceCount[roll]} times`);
    }
}

for(let i = 0; i < 1000; i++)
{
    rollDice();
}
displayScore();