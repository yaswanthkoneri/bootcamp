

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

// Javascript has lexical scoping which means outer scope elements are available in inner scope
let f;
if(true) {
    let i = 1;
    f = () => {
        console.log(i);
    }
}
console.log(i); // refernce error
f(); // 1
console.dir(f); // in [[scopes]] array, we will have global and block(i=1)

let f = () => {
    let i = 1;
    let j = 2;
    return () => {
        console.log(i);
    }
}
console.dir(f); // in [[scopes]] array, we will have global and closure(with i=1 and no j, as its not used)

