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

function isValidMove(move) {
	return move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8;
}

const knightMoves = (start, end) => {
	// console.log("Implement :)");
	let queue = [];

	let moves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	queue.push([start]);

	console.log("start");

	while (queue.length > 0) {
		let currentPath = queue.pop();
		let currentMove = currentPath[currentPath.length - 1]; //Gets the last move in the path

		if (currentMove[0] === end[0] && currentMove[1] === end[1]) {
			console.log(currentPath);
			return;
		} else {
			for (let move of moves) {
				let newMove = [
					currentMove[0] + move[0],
					currentMove[1] + move[1],
				];
				if (isValidMove(newMove)) {
					queue.unshift([...currentPath, newMove]);
				}
			}
		}
	}

	return "No path found";
};

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
