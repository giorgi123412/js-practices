let arr = [4, 1, 2, 5, 3];
let arrtwo = [];
for (let number of arr) {
    let i = 0;
    for (let a of arr) {
        if (number > a) {
            i++;
        }
    }
    arrtwo[i] = number;

}
console.log(arrtwo);