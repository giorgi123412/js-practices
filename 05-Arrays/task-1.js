    
function forEach(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should an Array');
    }
    else if (!(typeof callback === 'function')) {
        throw new Error('second parameter should be a Function');
    }

    for (i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

let arr = [1,2,3];
forEach(arr, function(item,i,arr){
    console.log(item);
    console.log(i);
    console.log(arr);
})
