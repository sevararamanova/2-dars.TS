//TASK 1
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b 
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    let catYears: number;
    let dogYears: number;
  
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 15 + 9;
      dogYears = 15 + 9;
    } else {
      catYears = 15 + 9 + (humanYears - 2) * 4;
      dogYears = 15 + 9 + (humanYears - 2) * 5;
    }
  
    return [humanYears, catYears, dogYears];
  }

//TASK 2 
//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25 
function whatday(number: number): string {
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


// TASK 3 
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e 
function expressionsMatter(a: number, b: number, c: number): number {
    const result1 = a + b + c;
    const result2 = a * b * c;
    const result3 = a * (b + c);
    const result4 = (a + b) * c;
    const result5 = a + (b * c);
    const result6 = (a * b) + c;
    return Math.max(result1, result2, result3, result4, result5, result6);
}


//TASK 4
//https://www.codewars.com/kata/55a5bfaa756cfede78000026 
function multiplyAndAdd(value: number | string): number | string {
    if (typeof value === "string") {
        return "Error";
    }
    return value * 50 + 6;
}


//TASK 5
//https://www.codewars.com/kata/56b1f01c247c01db92000076 
function duplicateCharacters(input: string): string {
    let result = '';
    for (let char of input) {
        result += char + char;
    }
    return result;
}

console.log(duplicateCharacters("String"));    
console.log(duplicateCharacters("Hello World")); 
console.log(duplicateCharacters("1234!_ "));  


// TASK 6
//https://www.codewars.com/kata/5556282156230d0e5e000089 
function dnaToRna(dna: string): string {
    return dna.replace(/T/g, 'U');
}

console.log(dnaToRna("GCAT"));  
console.log(dnaToRna("GCTAGC")); 
console.log(dnaToRna(""));     


//TASK 7
//https://www.codewars.com/kata/58649884a1659ed6cb000072 

function trafficLight(current: string): string {
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
function shortLongShort(a: string, b: string): string {
    const short: string = a.length < b.length ? a : b;
    const long: string = a.length >= b.length ? a : b;
    return short + long + short;
}

console.log(shortLongShort("1", "22")); 
console.log(shortLongShort("22", "1")); 
