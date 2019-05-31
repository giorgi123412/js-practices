function f(test) {
    if (typeof test === 'number'){
        test = test*test*test;
        return(test);
    } else {
        throw new Error('parameter type is not a Number');
    }
}
console.log(f(2));
console.log(f('Content'))
