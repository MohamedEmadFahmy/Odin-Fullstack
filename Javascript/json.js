async function populate() {
	const requestURL =
		"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
	const request = new Request(requestURL);

	const response = await fetch(request);
	const superHeroesText = await response.text();

	const superHeroes = JSON.parse(superHeroesText);

	console.log(superHeroesText); // JSON string
	console.log(superHeroes); // JSON object

	let myObj = { name: "Chris", age: 38 };

	let myJSON = JSON.stringify(myObj);

	console.log(myJSON); // JSON string
	console.log(myObj); // JSON string
}

populate();
