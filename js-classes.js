/**
 * Classes were added to js in es2015
 * Js classes are nothing but function constructors with prototype methods
 * 
 */

class Car {
    constructor(color) {
        this.color = color;
    }
}

console.dir(Car); // you will see, type class, it has prototype similar to function
console.dir(typeof(Car)); //'function' --> this means classes are nothing but functions in js

// using IFFE(Immediately-Invoked Functions Expression) to compare with functions; example:- let car = (callback)();
let Car = (function() {
    let _car = function(color) {
        this.color = color;
    }
    return _car;
})();

console.dir(Car); // compare this with the previous constructor using classes

///////////////////////////////

class Car {
    constructor(color) {
        this.color = color;
    }
    drive() { // this method will be avaiable in class prototype
        console.log('driving');
    }
}
// now, to simulate the same thing using funcitons
let Car = (function() {
    let _car = function(color) {
        this.color = color;
    };
    _car.prototype.drive = function() {
        console.log('driving');
    }
    return _car;
})();

// creating obj
let redCar = new Car('red');
