/**
 * Question: define a function sum(1)(2)(3)...() = 10;
 */
//ES5 solution
let sum = function(a) {
    return function(b) {
        if (!b) return a+b;
        return sum(a+b)
    }
}

//ES6 solution
let sum = a => b => b ? sum(a+b) : a;