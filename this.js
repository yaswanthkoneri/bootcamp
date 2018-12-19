const obj = {
    foo: 'bar'
};

const method = (() => {
    console.log(this.foo);
}).bind(obj);

method(); //undefined

/**
 * reason: the value of this will always be the value of closing lexical scope
 * while using arrow functions. ES6.
 */