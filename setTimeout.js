
console.log("first")
setTimeout(() => {
console.log("second")
}, 0);
console.log("third")


console.log("first");setTimeout(function() { console.log("second");}, 0);console.log("third");