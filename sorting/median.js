function calculateStatistics(scores) {
    // Sort the scores in ascending order
    scores.sort((a, b) => a - b);

    // Calculate the median
    const middle = Math.floor(scores.length / 2);
    console.log(middle)
    let median;
    if (scores.length % 2 === 0) {
        median = (scores[middle - 1] + scores[middle]) / 2;
    } else {
        median = scores[middle];
    }

    return {
        median,
        average,
        highest,
        lowest,
    };
}

//  odd number of scores
const oddScores = [80, 83, 86, 92, 100];
const oddStats = calculateStatistics(oddScores);
console.log("Odd Scores:");
console.log("Median:", oddStats.median);


// even number of scores
const evenScores = [80, 83, 86, 87, 92, 100];
const evenStats = calculateStatistics(evenScores);
console.log("\nEven Scores:");
console.log("Median:", evenStats.median);


