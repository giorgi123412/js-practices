const truncate = function (string, maxlength) {

    if (typeof string !== 'string' || typeof maxlength !== 'number') {
        throw new Error('First parameter must be string.');
    }

    let result = string;
    if (string.length > maxlength) {
        result = string.substring(0, maxlength-3) + '...';
    }
    return result;

};

console.log(truncate('I wanna to say next thing about this topic', 22));