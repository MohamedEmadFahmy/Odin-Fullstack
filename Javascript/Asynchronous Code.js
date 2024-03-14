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
// fetch("url.url.com/api", {
// 	mode: "cors",
// });

// How to use async and await:

const server = {
	people: [
		{
			name: "Odin",
			age: 20,
		},
		{
			name: "Thor",
			age: 35,
		},
		{
			name: "Freyja",
			age: 29,
		},
	],

	getPeople() {
		return new Promise((resolve, reject) => {
			// Simulating a delayed network call to the server
			setTimeout(() => {
				resolve(this.people);
			}, 2000);
		});
	},
};

// this
function getPersonsInfo(name) {
	return server.getPeople().then((people) => {
		return people.find((person) => {
			return person.name === name;
		});
	});
}

// Can be transformed to this

async function getPersonsInfo(name) {
	const people = await server.getPeople();
	const person = people.find((person) => {
		return person.name === name;
	});
	return person;
}

// You can use this to catch erros in async functions
asyncFunctionCall().catch((err) => {
	console.error(err);
});

// OR:

async function getPersonsInfo(name) {
	try {
		const people = await server.getPeople();
		const person = people.find((person) => {
			return person.name === name;
		});
		return person;
	} catch (error) {
		// Handle the error any way you'd like
	}
}

// You can use async and await with loops
const fruitLoop = async () => {
	const fruits = ["apple", "banana", "pear"];
	for await (let fruit of fruits) {
		console.log(fruit);
	}
};

// And if statments!!
const fruitInspection = async () => {
	const fruit = getFruit();

	if ((await fruit) === "apple") {
		console.log("It's an apple!");
	} else {
		console.log("It's not an apple!");
	}
};
