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

// 新增功能
function isMap(array, fn) {
    // 会返回一个新数组
    var crr = []
    for (let i = 0; i < drr.length; i++) {
        crr.push(fn(array[i], i, array))
    }
    return crr
}
var char = isMap(drr, function () {
    return 1
})
console.log(char);


isForeach(drr, function (value, index, array) {
    console.log(value);
})