const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
  // hey, this is a constructor - 
  // then this can be refactored into a factory!
  
function createUser (name) {
    const discordName = "@" + name;
    return  {
                name,
                discordName
            };
}
  // and that's very similar, except since it's just a function,
  // we don't need a new keyword

const user1 = createUser("moski");
// console.log(user1);


// you can also destructure objects like so:
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// console.log(a);
// console.log(b);

// Same thing with arrays:
const array = [1,2,3,4,5];
const [one, two] = array;
// console.log(one);
// console.log(two);


function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });
// logs { discordName: "@josh", reputation: 2 }

// you can see here that we have no access to the reputation variable



// you can exetnd the factories using other factories as such:
function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
}

const calculator = function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
}();
  
console.log(calculator.add(3,5));       // 8
console.log(calculator.sub(6,2));       // 4
console.log(calculator.mul(14,5534));   // 77476
  