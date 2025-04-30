function calculateAverage(score1, score2, score3)
{
    let sum = score1 + score2 + score3;
    return (sum/3).toFixed(1);
}

function assignGrade(averageScore){
    if (averageScore >= 93){
        return 'A';
    }
    else if(averageScore >= 80){
        return 'B';
    }
    else if(averageScore >= 80){
        return 'C';
    }
    else if(averageScore >= 70){
        return 'D';
    }
    else {
        return 'F';
    }
}

const scores =[]
let i = 0;
while(i < 3){
    let score = parseFloat(prompt(`Enter Score ${i + 1}: `));
    while (score > 100 || score < 0){
        score = parseFloat(prompt(`Score is out of range. Reenter the score (0 - 100): `));
    }
    i++;
    scores.push(score);
}

const averageScore = calculateAverage(...scores);
const finalGrade = assignGrade(averageScore);

console.log(`Your average score is ${averageScore}.`);console.log(`Your final grade is ${finalGrade}.`);