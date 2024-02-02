const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => {return reputation};
    const giveReputation = () => {return reputation++};

    return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }


// use Destructor to do prototypal inheritance

// function createPlayer(name, level) {
//     const { getReputation, giveReputation } = createUser(name);

//     const increaseLevel = () => level++;
//     // edited getLevel
//     const getLevel = () => level;
//     return { name, getReputation, giveReputation, increaseLevel,getLevel};
// }


// use Object.assign to do prototypal inheritance
function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    const getLevel = () => level;
    return Object.assign({}, user, { increaseLevel ,getLevel});
}

const newPlayer = createPlayer('kazru',14);
// console.log(newPlayer.discordName);

console.log(newPlayer.getLevel());


const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476



const PlayerMove = (function(){
    const right = ()=>console.log("go right");
    const left = ()=>console.log("go left");
    const up = ()=>console.log("go up");
    const down = ()=>console.log("go down");
    return {right,left,up,down}
})()

PlayerMove.left();