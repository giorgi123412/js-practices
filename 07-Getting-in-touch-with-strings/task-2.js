const checkSpam = function (source, example) {

    if (typeof source !== 'string'){
        throw new TypeError('First parametr is not string');
    }

    if (typeof example !== 'string'){
        throw new TypeError('Second parametr is not string');
    }

    for (var i = 0; i < source.length ; i++) {

        if (example == source.substring(i, example.length)); {
            return true;
        }
    }
    return false;
};

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
