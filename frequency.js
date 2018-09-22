var vowels= new Set(['a','e','i','o','u','A','E','I','O','U']);

var str = "aeiouaeiouAEIOUqwtyplk"

function getConsonantFrequency(str){
    var consonant=0
    for (i=0;i<str.length;i++){
        if(!vowels.has(str[i])) {
           consonant=consonant+1
        }
    }
    console.log(consonant)
}

getConsonantFrequency(str) // String Input