// const knightMoves = (start, end) => {
// 	const queue = [];
// 	const visited = new Set();
// 	const moves = [
// 		[1, 2],
// 		[2, 1],
// 		[-1, 2],
// 		[-2, 1],
// 		[1, -2],
// 		[2, -1],
// 		[-1, -2],
// 		[-2, -1],
// 	];

// 	queue.push([start]);
// 	visited.add(start.join());

// 	while (queue.length) {
// 		const path = queue.shift();
// 		const pos = path[path.length - 1];

// 		if (pos[0] === end[0] && pos[1] === end[1]) {
// 			console.log(path);
// 			return path;
// 		}

// 		for (let i = 0; i < moves.length; i++) {
// 			const x = pos[0] + moves[i][0];
// 			const y = pos[1] + moves[i][1];
// 			const newPos = [x, y];

// 			if (
// 				x >= 0 &&
// 				x < 8 &&
// 				y >= 0 &&
// 				y < 8 &&
// 				!visited.has(newPos.join())
// 			) {
// 				visited.add(newPos.join());
// 				queue.push([...path, newPos]);
// 			}
// 		}
// 	}
// 	console.log("No path found");
// 	return [];
// };

// knightMoves([0, 0], [1, 2]);
// knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [0, 0]);
// knightMoves([0, 0], [7, 7]);

const knightMoves = (start, end) => {
	console.log("Implement :)");
};

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
