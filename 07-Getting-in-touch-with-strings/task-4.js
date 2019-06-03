const extractCurrencyValue = function(source) {

    if (typeof source !== 'string') {
        throw new Error('Parametr isnot string');
    }
    return Number(source.slice(1));
};

console.log(extractCurrencyValue('$120'));