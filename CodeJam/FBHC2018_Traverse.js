(function() {
    const rawInputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
    
    let caseIndex = 1;
    const numOfCases = parseInt(rawInputs[0]);
    for (let inputReadCursor = 1, len = rawInputs.length; inputReadCursor < len && caseIndex <= numOfCases; inputReadCursor++, caseIndex++) {
        // console.log("CASE", caseIndex);
        const metaOfCase = rawInputs[inputReadCursor];
        const [N, K] = splitAndConvert(metaOfCase, 2); // 2 : N, K

        const startIdx = inputReadCursor+1;
        const endIdx = startIdx+N;
        inputReadCursor += N;

        const tree = rawInputs.slice(startIdx, endIdx).map(info => {
            return splitAndConvert(info, 2);
        });

        const pre = getPreordered(tree);
        const post = getPostordered(tree);        
        const sets = getDisjointSets(pre, post, N);
        console.log("A", caseIndex, pre, post, sets);
        const mappedIndexes = mapIndexes(K, N, sets);
        if (mappedIndexes == false) {
            console.log(`Case #${caseIndex}: Impossible`);
        } else {
            console.log(`Case #${caseIndex}: ${mappedIndexes.join(' ')}`);
        }
    }
})();

function splitAndConvert(stringOfNumbers, numOfValid) {
	return stringOfNumbers.split(' ').slice(0, numOfValid).map(function(num) {
		return parseInt(num);
	});
}

// https://algorithms.tutorialhorizon.com/binary-tree-postorder-traversal-non-recursive-approach/
function getPreordered(nodeInfos) {
    const stack = [];
    const result = [];
    const LEFT = 0, RIGHT = 1;

    let nodeIdx = 1;
    while (true) {
        while (nodeIdx) {
            result.push(nodeIdx);
            stack.push(nodeIdx);
            nodeIdx = nodeInfos[nodeIdx-1][LEFT];
        }

        if (stack.length <= 0) {
            return result;
        }

        nodeIdx = nodeInfos[stack.pop()-1][RIGHT];
    }
}

function getPostordered(nodeInfos) {
    const stack1 = [];
    const stack2 = [];
    const result = [];

    stack1.push(1); // push root first

    while (stack1.length) {
        const nodeIdx = stack1.pop();
        stack2.push(nodeIdx);

        const [left, right] = nodeInfos[nodeIdx-1];
        if (left) {
            stack1.push(left);
        }
        if (right) {
            stack1.push(right);
        }
    }

    while (stack2.length) {
        result.push(stack2.pop());
    }

    return result;
}

function getDisjointSets(pre, post, N) {
    const parent = [...new Array(N+1)].map((v, i) => i);
    for (let index = 0; index < N; index++) {
        if (pre[index] === post[index]) {
            parent[pre[index]] = 0;
        } else {
            Union(pre[index], post[index])
        }
    }
    return parent;


    function Find(x) {
        if (x === parent[x]) {
            return x;
        }
        const foundParent = Find(parent[x]);
        parent[x] = foundParent;
        return foundParent;
    }

    function Union(x, y) {
        x = Find(x);
        y = Find(y);

        if (x !== y) {
            parent[y] = x;
        }
    }
}

function mapIndexes(K, N, sets) {
    console.log("B", K, N, sets);
    const result = [];
    const indexPool = [...new Array(K)].map((v, i) => i+1);
    const rootToIndexMap = {};
    let wildCardCount = 0;

    for (let setIdx = 1; setIdx <= N; setIdx++) {
        const root = sets[setIdx];

        if (root === 0) {
            wildCardCount++;
            continue;
        }
        if (rootToIndexMap[root] === undefined) {
            if (indexPool.length) {
                rootToIndexMap[root] = indexPool.pop();
            } else {
                return false;
            }
        }
    }

    if (indexPool.length > wildCardCount) {
        return false;
    }

    for (let setIdx = 1; setIdx <= N; setIdx++) {
        const root = sets[setIdx];
        if (root === 0) {
            result.push(indexPool.length? indexPool.pop(): 1);
        } else {
            result.push(rootToIndexMap[root]);
        }
    }

    return result;
}
