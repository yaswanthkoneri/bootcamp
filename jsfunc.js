console.log(reverseNumber(98327832))
console.log(reverseNumber1(98327832))
console.log(sortAlphabetical("wjdciujiuedchiuhiuedhne"))
console.log(checkPalindrome("dfnvkjdfk"))
myColor(["Red", "Green", "White", "Black"]);
Longest_Country_Name(["Australia", "Germany", "United States of America"])

function reverseNumber (num){
num = `${num}`
var reversedNum =num.split('').reverse().join().replace(/,/g,'');
return parseInt(reversedNum);
}

function reverseNumber1(num){
    num = `${num}`
    var newnum =''
    for (var i=num.length-1;i>=0;i--){
        newnum=newnum+num[i];
    }
    return newnum
}

function arrayClone(arr){
    var arr1 = arr.map(x=>x*2)
    console.log(arr1.toString()===arr.toString())
}

console.log("kfjdhkjdfvjfdsjkj",arrayClone([1,2,3,4]))

function first (arr,n){
    var arr1=[]
    if (n==null || n==undefined || n>=arr.length){
        return arr
    }
    for (i=0;i<n;i++){
        arr1.push(arr[i])
    }
    return arr1
}

console.log(first([0,1,2,3],4))

function checkPalindrome(str){
    for (i=0;i<str.length;i++){
        if (str[i]==str[(str.length-1)-i] && i!==str.length-1){
            continue;
        }
        else if (str[i]==str[(str.length-1)-i] && i==str.length-1){
            return true
        }
        else{
            return false
        }
    }
}


function Longest_Country_Name(array){
    var y=0;v=''
    array.forEach(element => {
        if (y<element.length){
            v=element
            y=element.length
        }
    });
    console.log(y,v)
}

function myColor(array){
    v=''
    array.forEach(element=>{
        v+=`${element},`
    })
    console.log(v.slice(0,-1))
}

function sortAlphabetical(str){
    var s=str.split('').sort().join().replace(/,/g,'')
    return s
}


function fUpperCase (str){
    var a=str.split(" ")
    var b=[]
    console.log(a)
    for (i=0;i<a.length;i++){
        c=a[i].charAt(0).toUpperCase()+a[i].slice(1)
        b.push(c); 
    }
    console.log(b.join().replace(/,/g,' '))
}

console.log(fUpperCase('the quick brown fox'))


function typeOfArgument (){
    return typeof (arguments)
}

console.log(typeOfArgument(null))