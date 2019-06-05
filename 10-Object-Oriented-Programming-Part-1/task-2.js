function CoffeeMachine(power, capacity) {

    Object.defineProperty(this, 'power', {
		get(){
			return power
		}
    });
    
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
}

const coffee = new CoffeeMachine(1);
console.log(coffee.power);
