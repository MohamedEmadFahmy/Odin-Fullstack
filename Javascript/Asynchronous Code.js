//  Example of callback function
// const myDiv = document.getElementById("myDiv");

// myDiv.addEventListener("click", function () {
// 	// do something!
// });

// How to use promises:

// 1. Create a new promise

// let fail = false;

// const myPromise = new Promise((resolve, reject) => {
// 	if (fail) {
// 		reject("I failed");
// 	} else {
// 		resolve("I succeeded");
// 	}
// });

// myPromise
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((message) => {
// 		console.log(message);
// 	});

let promise1 = new Promise((resolve, reject) => {
	resolve("Promise 1 succeeded");
});
let promise2 = new Promise((resolve, reject) => {
	resolve("Promise 2 succeeded");
});
let promise3 = new Promise((resolve, reject) => {
	resolve("Promise 3 succeeded");
});

// Excute all promises at the same time and wait until they all finish
// Promise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });

promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 succeeded");
	}, 1000);
});

// Excute all promises at the same time and wait until one of them finishes
// Promise.race([promise1, promise2, promise3]).then((value) => {
// 	console.log(value);
// });

// fetch method
fetch("https://official-joke-api.appspot.com/jokes/random")
	.then((res) => {
		// console.log(res);
		res.json()
			.then((data) => {
				console.log(data);
			})
			.catch(() => {
				console.log("Error converting to JSON: ");
			});
	})
	.catch((err) => {
		console.log(err);
	});
