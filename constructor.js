let fun = function(d) {
    console.log(d)
}

fun(5) //5

let car = function (e) {
    console.log(this);
    this.faisal = e;
}

let me = new car(78) 
//car { faisal: 78 }

let u =  car(78) //undefined
// window.faisal = 78

/**
 * private variables in js
 * but using closure we can create inner variables
 */
let car = function(_color) {

    this.setColor = function(color) {
        _color = color;
    }

    this.getColor = function() {
        return _color;
    }
}