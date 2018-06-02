(() => {
	const stringToNumberArray = (input => 
		input.split(' ').map(num => 
			parseInt(num)).filter(num => !Number.isNaN(num)
		)
	);

	const [caseNum, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
	const numberedInputs = inputs.map(stringToNumberArray);

	for (let caseIdx = 0; caseIdx < caseNum; caseIdx++) {
		const clockStates = numberedInputs[caseIdx].map( num => (num/3)%4 );
		console.log(specificSolution(clockStates));
		// console.log(bruteForceSolution(clockStates));
	}
})();


function specificSolution(clockStates) {
	const switchMap = [
		{
			deciders: [8, 12],
			followers: [6,7,10]
		},
		{
			deciders: [11],
			followers: [3,7,9]
		},
		{
			deciders: [13],
			followers: [3,4,5,9]
		},
		{
			deciders: [10],
			followers: [4,14,15]
		},
		{
			deciders: [6],
			followers: [0,4,5,7]
		},
		{
			deciders: [7],
			followers: [4,5,14,15]
		},
		{
			deciders: [4,5],
			followers: [1,2,3]
		},
		{
			deciders: [3],
			followers: [14,15]
		},
		{
			deciders: [14,15],
			followers: [0,2]
		},
		{
			deciders: [0,1,2],
			followers: []
		}
	];

	let accumulatedCount = 0;

	for (let i = 0; i < switchMap.length; i++) {
		const {deciders, followers} = switchMap[i];

		let countToRotate = clockStates[deciders[0]];

		// validate if all deciders have same count
		for (let deciderIdx = 1; deciderIdx < deciders.length; deciderIdx++) {
			const currentCount = clockStates[deciders[deciderIdx]];
			if (currentCount !== countToRotate) {
				return -1;
			}
		}

		// do the rotation
		for (let followerIdx = 0; followerIdx < followers.length; followerIdx++) {
			const follower = followers[followerIdx];
			clockStates[follower] = (clockStates[follower] +  [],- countToRotate) % 4;
		}

		accumulatedCount += countToRotate;
	}

	// if (clockStates.every(state => state === 0)) {
		return accumulatedCount;
	// } else {
		// return -1;
	// }
}

function bruteForceSolution(clockStates) {
	const switchToClock = [
		[0, 1, 2],
		[3, 7, 9, 11],
		[4, 10, 14, 15],
		[0, 4, 5, 6, 7],
		[6, 7, 8, 10, 12],
		[0, 2, 14, 15],
		[3, 14, 15],
		[4, 5, 7, 14, 15],
		[1, 2, 3, 4, 5],
		[3, 4, 5, 9, 13],
	];

	let minRotationCount = undefined;

	function dfs(mapIdx, accumulatedCount) {
		const clockIdxs = switchToClock[mapIdx];

		for (let rotationCount = 0; rotationCount < 4; rotationCount++) {
			// do the rotation
			clockIdxs.forEach(clockIdx => clockStates[clockIdx] -= rotationCount);
			accumulatedCount += rotationCount;

			if (mapIdx === switchToClock.length - 1) {
				if (clockStates.every(state => state === 0)) {
					return accumulatedCount;
				} else {
					return -1;
				}
			} else if (mapIdx === 0) {
				const finalCount = dfs(mapIdx+1, accumulatedCount);
				if (finalCount !== -1 && (minRotationCount === undefined || finalCount < minRotationCount)) {
					minRotationCount = finalCount;
				}
			} else {
				return dfs(mapIdx+1, accumulatedCount);
			}
		}

		if (mapIdx === 0 && minRotationCount === undefined) {
			return -1;
		}
	}

	return dfs(0, 0);
}
