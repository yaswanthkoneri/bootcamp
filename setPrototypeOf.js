// Object.setPrototypeOf(destObj, sourceObj);

let toyota = {
    drive() {
        return 'driving toyota';
    },
    break() {
        return 'breaking toyota';
    }
};

let camry = {
    wifi() {
        return 'using wifi';
    }
}

Object.setPrototypeOf(camry, toyota);
console.log(camry.drive()); // driving toyota

let toyota1 = {
    drive() {
        return 'driving toyota';
    }
};

let camry1 = {
    drive() {
        return 'driving camry1';
    },
    driveSuper() {
        return `${super.drive()} camry`;
    }
}

Object.setPrototypeOf(camry1, toyota1);
console.log(camry1.drive()); // driving camry1
console.log(camry1.driveSuper()) // driving toyota camry1



// other method
camry.__proto = toyota; // this works but not recomended, might go away from js



/**
 * Object.assign()
 */
Object.assign(camry, toyota);
console.dir(camry) // has all three methods drive, break and wifi
// but the methods are copied and not referenced in the prototype of camry as before

let copyToyota = Object.assign({}, toyota) // shallow copy not a deep copy, does not copy the prototype methods

// other utilities
let c1 = function(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
} 
//can also be written as
let c1 = function(x,y,z) {
    Object.assign(this, {x,y,z});
}

/**
 * Function Mixins: these piece of code you add to obj to extend them.
 */

const jsSkill = {
    knowsJS() {
        return true;
    }
};

const engDegree = {
    hasDegree() {
        return true;
    }
};

const jsEngineer = Object.assign({}, jsSkill, engDegree);
console.dir(jsEngineer);

/**
 * Factory Function: Used to build objs (like constructors)
 */
let Car = function(color) {
    this.color = color
} //regular constructor
let redCar = new Car('red');

let Car = function(color) {
    let moving = false; //using closure for private variables
    return Object.assign({}, {
        color: color,
        drive() {
            moving = true;
            return this;
        },
        isMoving() {
            return moving;
        }
    });

} //factory function to build obj, notice no new keyword
let redCar = Car('red');
console.dir(redCar);
console.dir(redCar.drive().isMoving()); //true

// factory functions take obj as an argument and it would copy the methods that are inside the mix-ins
// into this obj and returns a NEW obj, and the state is preserved 

const humanFactory = function(obj) {
    let isCrying = false;
    return Object.assign({}, obj, {
        cry(){
            isCrying = true;
            return this;
        },
        isCrying() {
            return isCrying;
        }
    });
    // here adding the methods and properties this factory will provide
}

const faisal = humanFactory({});
console.dir(faisal); // the obj will have 2 methods; cry and isCrying(with isCrying=false in closure).

const flyFactory = function(obj) {
    let isFlying = false;

    return Object.assign({}, obj, {
        fly(){
            isFlying = true;
            return this;
        },
        isFlying() {
            return isFlying;
        }
    });
}

const superMan = humanFactory(flyFactory({}))
console.dir(superMan); // will have all the four method in the obj and states preserved with closure

console.log(superMan.fly().cry().isCrying());//true
console.log(superMan.isFlying());//true