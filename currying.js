const multiplyer = n => a => a * n;

const double = multiplyer(2);
const triple = multiplyer(3);

double(3) //6
triple(3) //9

// level: advanced
// implement currying

// let's take a function which takes two arguments: 
// const add = (x, y) => x + y
//
// now, we want to generate a function from this, with first argument
// freezed:
// const add3 = curry(add, 3)   // create a function, with first arg = 3 on add
//                              // equivalent to add(3, x): add3 = (x) => 3 + x
// add3(4)                      // should return 3 + 4 = 7
//
// this could be applied to any functions
// const mult = (x, y, z) => x * y * z
// const mult3 = curry(mult, 3) // equivalent to mult(3, x, y) : mult3 = (x, y) => 3 * x * y
// const mult3and4 = curry(mult3, 4) // equivalent to mult(3, 4, x): mult3and4 = (x) => 3 * 4 * x
// 
// implement the curry function
const curry = ...


// answer
const curry = (f, arg) => (...args) => f(...[arg].concat(args))

// re-implement the curry function, that freezes the last argument instead of first
// const sub = (x, y) => x / y
// const sub3 = curry(sub, 3) // equivalent to sub(x, 3): sub3 = (x) => x - 3

// answer
const curry_last = (f, arg) => (...args) => f(...args.concat([arg]))


// bonus
// make the curry function a generic one that can handle both first and last argument
// currying

const curry = (f, arg, last=false) => (...args) => last ? f(...args.concat([arg])) : f(...[arg].concat(args))

// first arg freeze
const g = curry(f, x)
// last arg freeze
const g = curry(f, x, true)
