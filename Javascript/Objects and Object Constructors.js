const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
};


// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// const player = new Player("moski", "X");
// console.log(player.name);


// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = function() {
//       console.log(this.name)
//     };
//   }
  
//   const player1 = new Player('steve', 'X');
//   const player2 = new Player('also steve', 'O');
//   player1.sayName(); // logs 'steve'
//   player2.sayName(); // logs 'also steve'


function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        readStatus = isRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} , ${readStatus}`;
    };
}

const book1 = new Book("rise of the moskito", "moskerman", 200, false);

// console.log(book1);
// console.log(book1.info());




// console.log(Object.getPrototypeOf(book1));
// console.log(Book.prototype);

Book.prototype.sayHello = function (){
    console.log(`Hello Im book ${this.title}`);
};

// book1.sayHello()

// console.log(book1.valueOf());

// console.log(book1.hasOwnProperty('valueOf'));               // false
// console.log(Object.prototype.hasOwnProperty('valueOf'));    // true



function Person(name) {
    this.name = name;
}
  
Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};
  
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
  
Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};
  
  // Object.getPrototypeOf(Player.prototype) should
  // return the value of "Person.prototype" instead
  // of "Object.prototype"
Object.getPrototypeOf(Player.prototype); // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype
  
const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
  
player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!
  
player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'