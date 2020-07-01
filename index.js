// The number of "how many arguments are expected" is called arity

// Keep this in mind as you write your own reduce.

function map(arr, func) {
    let nwarr = []
    for (let ele of arr) {
        nwarr.push(func(ele))
    }
    return nwarr
}

// map([1, 2, 3, -9], function (a) { return a * a }) //=> [1, 4, 9, 81]

function reduce(arr, func, start) {
    let total = 0;
    let x = 0;
    if (!!start) {
        total = start;
    } else {
        total = arr[0];
        x = 1;
    }

    for (let i = x; i < arr.length; i++) {
        total = func(arr[i], total)
    }

    return total
}


// function(e, memo){return e + memo}, startingPoint)