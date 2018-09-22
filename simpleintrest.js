
function simpleInterest(p,t,r){
    simpleInt = p*t*r/100
    return simpleInt;
}

function compoundInterest (p,r,n,t){
    compoundInt = p*(Math.pow((1+r/n),(n*t)))
    return compoundInt
}


console.log(compoundInterest(5000,0.05,12,10))
console.log(simpleInterest(1000,1,100))