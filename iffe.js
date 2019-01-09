// Function
function f1() {
    return 1;
}

alert(foo()); // returns 5. Declarations are loaded before any code can run.
function foo() { return 5; }

//Function Expression
let f2 = function() {
    return 2;
}

f2();//2


alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; }

//IFFE
(function f2(i) {
    return i + 2;
})(j);

//or
(function f2(i) {
    return i + 2;
}(j));

// usecase: iffes are closures that help us establish private methods while exposing some properties for later use
var counter = (function() {
    var i = 0;

    return {
        get: function() {
            return i;
        },
        set: function(val) {
            i = val;
        },
        increment: function() {
            i++;
        }
    }
})()

console.log(counter.get()); //0
counter.set(5); //5
counter.increment();
console.log(counter.get()); //6
