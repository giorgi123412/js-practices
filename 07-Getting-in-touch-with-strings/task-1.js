const upperCaseFirst = function (str) {

    if (typeof str !== 'string') {
        throw new TypeError('Is not string');
    }

    let one = str.charAt(0);
    let two = str.slice(1);

    return one + two;
}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));