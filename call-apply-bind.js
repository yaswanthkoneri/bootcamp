var obj = {num:2};

var addToThis = function(a, b, c) {

    return this.num + a + b + c;
}

// the above obj and method are unrelated
// however if you need to bind the method to any obj
// we can use call
console.log(addToThis.call(obj, 1, 2, 3)); // functionName.call(obj, funcArguments)
// 8

// apply is similar to call but takes in an array
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr)); // 8

//Bind
var bound = addToThis.bind(obj);
//returns the function with the input obj binded
console.log(bound(1,2,3)); //8

// polyfill for bind
Function.prototype.bind = function (context) {
    return () => {
        this.call(context);
    }
}

// polyfill for call
Function.prototype.apply = function (context, params) {
    let bindedFunction = this.bind(context);
    return bindedFunction(params);
}





