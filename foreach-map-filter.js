function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(num){
        newArr.push(num*2);
    });
    return newArr;
}

function onlyEvenValues(arr){
   let newArr = [];
   arr.forEach(function(num){
    if (num % 2 === 0){
        newArr.push(num)
    }
   })
   return newArr;
}


function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(word){
        newArr.push(word[0] + word[word.length-1])
    })
    return newArr;
}


function addKeyAndValue(arr,key,value){
    arr.forEach(function(name){
        name[key] = value;
    });
    return arr;
}


function vowelCount(str){
   const vowels = 'aeiou';
   const obj = {};
   const newArr = str.split('');

   newArr.forEach(function(letter){
    let lower = letter.toLowerCase();
    if (vowels.indexOf(lower) !== -1){
        if (obj[lower]){
            obj[lower]++;
        } 
        else {
            obj[lower] = 1
        }
    }
   });
   return obj;
}


function doubleValuesWithMap(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}


function valTimesIndex(arr){
    return arr.map(function(num, idx){
        return num * idx;
    });
}


function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key];
    })
}


function extractFullName(arr){
    return arr.map(function(obj){
        return `${obj['first']} ${obj['last']}`
    })
}


function filterByValue(arr, key) {
    return arr.filter(function(obj){
        return obj[key]
    })
}


function find(arr, searchValue) {
    let newArr = arr.filter(function(num){
        return num === searchValue;        
    })
    return newArr[0];
}


function findInObj(arr, key, searchValue) {
    let newArr = arr.filter(function(obj){
        return obj[key] === searchValue
    })
    return newArr[0];
}


function removeVowels(str) {
    let vowels = 'aeiou';
    let lowerCased = str.toLowerCase();
    let outputArr = lowerCased.split('').filter(function(letter){
        return vowels.indexOf(letter) === -1;
    })
    return outputArr.toString().replaceAll(',','');
}


function doubleOddNumbers(arr) {
    let doubledArr =  arr.map(function(num) {
        return num * 2;
    });
    let onlyOdds = doubledArr.filter(function(num){
        return num % 4 !== 0;
    })
    return onlyOdds;
}
