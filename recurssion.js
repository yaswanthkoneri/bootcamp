/**
 * Amazon interview
 * Question: define a function sum(1)(2)(3)...() = 10;
 */
//ES5 solution
let sum = function(a) {
  return function(b) {
    if (!b) return a + b;
    return sum(a + b);
  };
};

//ES6 solution
let sum = a => b => (b ? sum(a + b) : a);

/**
 * Microsoft interview
 * Question: write a function to convert a nested obj to 1 level deep obj
 * eg input obj: user = {
 *  name: "faisal",
 *  address: {
 *      personal: {
 *          city: "hyderabad"
 *      }
 *  }
 * }
 * output obj: user = {
 *  name: "faisal",
 *  address_personal_city: "hyderabad"
 * }
 */
let user = {
  name: "faisal",
  address: {
    personal: {
      city: "hyderabad"
    }
  }
};
// console.dir(user)

var recurssion = (obj, output, parentKey) => {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let currentKey = Object.keys(obj)[i];
    if (typeof obj[currentKey] == "string") {
      let newParentKey =
        parentKey !== "" ? parentKey + "_" + currentKey : currentKey;
      output[newParentKey] = obj[currentKey];
    } else {
      let newParentKey =
        parentKey !== "" ? parentKey + "_" + currentKey : currentKey;
      recurssion(obj[currentKey], output, newParentKey);
    }
  }
  return output;
};

console.dir(recurssion(user, {}, ""));
