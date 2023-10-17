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

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {}
