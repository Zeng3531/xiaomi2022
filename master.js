var drr = [1, 2, 3, 4, 5, 6, 7]

function isForeach(array, fn) {
    var e = array.length
    for (let i = 0; i < e; i++) {
        fn(array[i], i, array)
    }
}

drr.forEach(item => {
    console.log(item);
});

isForeach(drr, function (value, index, array) {
    console.log(value);
})