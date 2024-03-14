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
// fetch("https://official-joke-api.appspot.com/jokes/random")
// 	.then((res) => {
// 		// console.log(res);
// 		res.json()
// 			.then((data) => {
// 				console.log(data);
// 			})
// 			.catch(() => {
// 				console.log("Error converting to JSON: ");
// 			});
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// APIs:

// let apiKey = "7d4f312447a2449fb18195331241403";
//api.weatherapi.com/v1/current.json?key=7d4f312447a2449fb18195331241403&q=London&aqi=no
// fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`)
// 	.then((response) => {
// 		// console.log("SUCCESS");
// 		// console.log(response);
// 		response.json().then((data) => {
// 			console.log(data);
// 		});
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});

// let giphyApiKey = "TzxP5j3KEVoTdpC6O0cn3nALNlM0zbRZ";

// fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=cats`)
// 	.then((response) => {
// 		console.log("SUCCESS");
// 		// console.log(response);
// 		response.json().then((data) => {
// 			console.log(data);
// 		});
// 	})
// 	.catch((error) => {
// 		console.log("Failure");
// 	});

// To use cors
fetch("url.url.com/api", {
	mode: "cors",
});
