// Function
function f1() {
    return 1;
}

//Function Expression
function f2() {
    return 2;
}

f2();//2

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
