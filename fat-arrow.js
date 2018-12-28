"use strict"; // telling browser to use the latest functionality es6 and hadling other errors

var getA = function(a) {
    return a;
}

var getB = (b) => {
    return b;
}

var getB = b => b;

/**
 * arrow meets this
 */
var x  = function() {
    this.var = 1;
    setTimeout(function(){
        this.var++;
        console.log(this.var);
    }, 100)
};

var xx = new x(); // NaN
// because this is not recognized inside setTimeout, probably its this of the callback provided to setTimeout.
// can you hack like self = this to solve it
// ideal method is to use fat arrow funcitons

var x = function() {
    this.var = 1;
    setTimeout(() => {
        this.var++;
        console.log(this.var);
    }, 100);
}
var xx = new x(); // 2
// here fatarrow does not have its own this, it uses parents this and it binds it

/**
 * another usecase is: arguments key word
 */
var x = function() {
    console.log(arguments[0]);
}
x(1,2,3) //1

var x = () => {
    console.log(arguments[0]);
}
x(1,2,3) // gives something else
//solution is using the spread operator
var x = (...n) => {
    console.log(n[0]);//1
}