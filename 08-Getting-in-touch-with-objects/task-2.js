const person = {}

Object.defineProperty(person, 'rate', {
    rate : null,
    salary : null,
    writable: true,
    enumerable: false,
    configurable: false
});

Object.defineProperty(person, 'salary', {

    set () {
        throw new TypeError('you can\' change this');
    },

    get() { 
        let today = new Date();
        today = today.getDay();
        if (typeof this.rate != undefined )
            return this.rate*today;
        return 0;
    }
});

person.rate = 30;
person.salary= 10;

console.log(person.salary);