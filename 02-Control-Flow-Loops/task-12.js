let arr = [2, 5, 9, 15, 0, 4];

let newarr = arr.filter(function(x) {
    return x > 3 && x < 10;
});
console.log(newarr);