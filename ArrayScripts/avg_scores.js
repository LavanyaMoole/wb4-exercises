let myScore=[92,93,89,96,85,100,91,94];
let avg=0;
let sum=0;
function getAverage(score){
    for(let i=0;i<score.length;i++){
        sum+=score[i];
    }
    avg=(sum/(myScore.length));
    return avg;
}
average=getAverage(myScore)

console.log(`Total score :${sum}`);
console.log(`Total score :${average}`);
