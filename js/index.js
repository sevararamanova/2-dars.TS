"use strict";

//TASK 1
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b 
function humanYearsCatYearsDogYears(humanYears) {
    let catYears;
    let dogYears;
    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    }
    else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
    else {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }
    return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1)); 
console.log(humanYearsCatYearsDogYears(2)); 
console.log(humanYearsCatYearsDogYears(10)); 



// TASK 2 
//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25 
function whatday(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Wrong, please enter a number between 1 and 7";
    }
}

// Test the function
console.log(whatday(1)); 
console.log(whatday(2)); 
console.log(whatday(3)); 
console.log(whatday(4)); 
console.log(whatday(5)); 
console.log(whatday(6)); 
console.log(whatday(7)); 
console.log(whatday(8)); 


// TASK 3

function expressionsMatter(a, b, c) {
    const result1 = a + b + c;
    const result2 = a * b * c;
    const result3 = a * (b + c);
    const result4 = (a + b) * c;
    const result5 = a + (b * c);
    const result6 = (a * b) + c;
    return Math.max(result1, result2, result3, result4, result5, result6);
}

// Test cases
console.log(expressionsMatter(1, 2, 3)); // 9
console.log(expressionsMatter(1, 1, 1)); // 3
console.log(expressionsMatter(9, 1, 1)); // 18


//TASK 4
//https://www.codewars.com/kata/55a5bfaa756cfede78000026 
function multiplyAndAdd(value) {
    if (typeof value === "string") {
        return "Error";
    }
    return value * 50 + 6;
}

console.log(multiplyAndAdd(2));    
console.log(multiplyAndAdd(4));   
console.log(multiplyAndAdd("text")); 


// TASK 5 
//https://www.codewars.com/kata/56b1f01c247c01db92000076 
function duplicateCharacters(input) {
    let result = '';
    for (let char of input) {
        result += char + char;
    }
    return result;
}

console.log(duplicateCharacters("String"));    
console.log(duplicateCharacters("Hello World")); 
console.log(duplicateCharacters("1234!_ "));   


//TASK 6
//https://www.codewars.com/kata/5556282156230d0e5e000089 
function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
}

console.log(dnaToRna("GCAT"));  
console.log(dnaToRna("GCTAGC"));
console.log(dnaToRna(""));    


//TASK 7
//https://www.codewars.com/kata/58649884a1659ed6cb000072 
function trafficLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            throw new Error('Invalid traffic light state');
    }
}

console.log(trafficLight('green')); 
console.log(trafficLight('yellow')); 
console.log(trafficLight('red'));   


//TASK 8
//https://www.codewars.com/kata/50654ddff44f800200000007
function shortLongShort(a, b) {
    let short = a.length < b.length ? a : b;
    let long = a.length >= b.length ? a : b;

    return short + long + short;
}

console.log(shortLongShort("1", "22"));
console.log(shortLongShort("22", "1")); 
