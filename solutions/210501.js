// Problem: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// Result: https://app.codility.com/demo/results/trainingNU7BWQ-6NW/

function solution(X, A) {
    const positionToEarlistTimeMap = new Array(X+1);

    A.forEach((position, time) => {
        if (positionToEarlistTimeMap[position] === 0 || positionToEarlistTimeMap[position]) {
            return;
        }

        positionToEarlistTimeMap[position] = time;
    });

    let latestTime = 0;
    for (let i = 1; i < X+1; i++) {
        if (positionToEarlistTimeMap[i] !== 0 && !positionToEarlistTimeMap[i]) {
            return -1;
        }
        latestTime = Math.max(latestTime, positionToEarlistTimeMap[i]);
    }

    return latestTime;
}
