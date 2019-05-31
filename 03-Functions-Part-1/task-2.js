function f(test) {

    let sum = 0;
    for (let i = 0; i < test.length; i++) {
        if (typeof i === 'number') {
            sum = sum + test[i];
        }else {
            throw new Error ('all parameters type should be a Number');
        }
    }
    return sum;
}

console.log(f([1,2,3]));
console.log(f([1,1,1,1,1,1,1,1]));