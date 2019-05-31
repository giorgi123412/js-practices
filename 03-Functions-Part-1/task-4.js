function f(test) {
    if (test == 1) {
        return 'Sunday';
    }else if (test == 2) {
        return 'Monday';
    }else if (test == 8) {
        throw new Error ('parameter should be in the range of 1 to 7');
    }else {
        throw new Error ('parameter type is not a Number');
    }
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));