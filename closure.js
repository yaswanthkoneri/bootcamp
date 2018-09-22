

// var a=12

(function outer(b){
    (function inner(c){
        console.log(b+c)
    })(5)
})(8)
