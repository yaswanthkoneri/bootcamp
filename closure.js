

// var a=12

(function outer(b){
    (function inner(c){
        console.log(b+c)
    })(5)
})(8)

// Closures are nothing but FUNCTIONS WITH PRESERVED DATA

var passed = 3;
var addTo = function () {
    var inner = 2;
    return passed + inner;
}

console.log(addTo()); //5

// another example
var addTo = function(passed) {
    var add = function(inner) {
        return passed + inner;
    }
    return add;
}

var addToThree = new addTo(3);
var addToFour = new addTo(4);

console.log(addToThree(1));//4 
console.log(addToFour(1));//4 