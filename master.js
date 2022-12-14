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

// 封装一个过滤函数  返回一个新数组 ,符合条件的值
function funfilter(array, fn) {
    var err = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i)) {
            console.log(array[i], i);
            err.push(array[i])
        }
    }
    return err
}


const result = funfilter(drr, function (value, index, array) {
    return value > 5
})
console.log(result);

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

