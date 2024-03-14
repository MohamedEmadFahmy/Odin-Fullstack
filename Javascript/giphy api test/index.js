const img = document.querySelector("img");
const button = document.querySelector("button");
const searchBox = document.querySelector("input");

button.addEventListener("click", () => {
	let searchText = searchBox.value;
	fetchGIF(searchText);
});

function fetchGIF(searchText) {
	let giphyApiKey = "TzxP5j3KEVoTdpC6O0cn3nALNlM0zbRZ";
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${searchText}`,
		{
			mode: "cors",
		}
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		});
}

fetchGIF("waiting");
