
function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length);
console.log(lazy.food.length);