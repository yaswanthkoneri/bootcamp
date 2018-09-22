

function primeNumbers(lb,ub){
    d=0
    for (i=lb;i<ub;i++){
        c=0;
        for (j=1;j<=i;j++){
            if(i%j==0){
                c++;
            }
        }
        if (c==2){
            d++
            if(d%2!==0){
            console.log(i)
            }
        }
    }

}

