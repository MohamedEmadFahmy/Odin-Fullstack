alert("Hello World!");

const myFunc = () => {
	console.log("Hello World!");
};

myFunc();

let myArray = [1, 2, 3, 4, 5];

let array2 = [...myArray];

myArray[0] = 100;

console.log(myArray);
console.log(array2);
