function f(test) {
    if (typeof test === 'number'){
        cube = test*test*test;
        return(cube);
    } else {
        throw new Error('parameter type is not a Number');
    }
}
console.log(f(2));
console.log(f('Content'));
