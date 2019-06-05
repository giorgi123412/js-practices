function CoffeeMachine(power) {
	this.waterAmount = 0;
	const WATER_HEAT_CAPACITY = 4200;
    const self = this;

    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
    
    let test = this;

    this.run = function() {
        test = setTimeout(onReady, getBoilTime())
    };
    
    this.stop = function() {
        clearTimeout(test);
	};
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop();