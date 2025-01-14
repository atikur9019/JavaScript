function calculateStrikeRate(runs, balls){
    const strikeRate = (runs / balls) * 100;
    return strikeRate.toFixed(2);
}

console.log(calculateStrikeRate(45, 30));
console.log(calculateStrikeRate(100, 60));
console.log(calculateStrikeRate(25, 40));