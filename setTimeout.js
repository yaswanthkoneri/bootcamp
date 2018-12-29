
console.log("first")
setTimeout(() => {
console.log("second")
}, 0);
console.log("third")


console.log("first");setTimeout(function() { console.log("second");}, 0);console.log("third");


//..........................................
for(let i=0; i<3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log('done');

/**
 * outputs: done
 * 0
 * 1
 * 2
 */

for(var i=0; i<3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log('done');

/**
 * outputs: done
 * 3
 * 3
 * 3
 */

// this is due to closure of i in setTimeout function 
// to solve this useing var, use iffe

for(var i=0; i<3; i++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i);
}
console.log('done');

/**
 * outputs: done
 * 0
 * 1
 * 2
 */