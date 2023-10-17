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

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {}

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
