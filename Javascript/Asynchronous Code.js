//  Example of callback function
const myDiv = document.getElementById("myDiv");

myDiv.addEventListener("click", function () {
	// do something!
});

// How to use promises:

const getData = function () {
	// go fetch data from some API...
	// clean it up a bit and return it as an object:
	return data;
};

// As myData might not be available immediately, we use a promise to handle it
// const myData = getData();
// const pieceOfData = myData["whatever"];

const myData = getData(); // if this is refactored to return a Promise...

myData.then(function (data) {
	// .then() tells it to wait until the promise is resolved
	const pieceOfData = data["whatever"]; // and THEN run the function inside
	console.log(pieceOfData);
});
