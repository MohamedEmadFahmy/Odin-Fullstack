// console.log("hello");

class Person {
    name;
    age;

    // You can do this to make an attribute private:
    #height = 15;


    constructor(name){
        this.name = name;
        this.age = 18;
    }

    getName = () => {
        return this.name;
    }
    getAge = () => {
        return this.age;
    }
    getHeight = () => {
        return this.#height;
    }
}

let moski = new Person("moski");
// console.log(moski.getName());
// console.log(moski.getAge());
// console.log(moski.getHeight());


// console.log("--------");


// console.log(moski.age);  // this works
// console.log(moski.height);  // this doesn't



// Inheritance:

class Student extends Person {
    constructor(name){
        super(name);
    }

    // you can add static variables and methods:

    static allowance = 5;

    static staticMethod(){
        return "I'm a static method";
    }
}

let s1 = new Student("moski student");
// console.log(s1);


// console.log(Student.allowance);
// console.log(Student.staticMethod());



// -------------------------------------------------------



// Composition vs Classes:


// Classes:

// Base class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

// Derived class Cat
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + ' says meow.');
    }
}

// Derived class Dog
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + ' says woof.');
    }
}

// Composition:

const steer = {
    steeringSpeed : 5,
    
    steer() {
        console.log(`steering ${this.name}`)
    }
}

const run = {
    runningSpeed : 10,
    run() {
      console.log(`${this.name} is running`)
    }
}
  
const fly = {
    fly() {
      console.log(`${this.name} is flying`)
    }
}


const steerAndRun = { ...steer, ...run };
const flyingAndRunning = { ...run, ...fly };

// console.log(steerAndRun);

const createVehicle = (name) =>{
    return {
        name,
        ...steerAndRun
    };
}

const car1 = createVehicle("moskcar");
// console.log(car1);
car1.run();

// Here you seperate the objects in terms of functionality instead of their type
// Usually better as it is easy to change functionality later







