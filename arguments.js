function addition(num1, num2) {
    // console.log(arguments[3]);
    let result = 0;
    for (const number of arguments) {
        result += number
    }
    return result
}

const getResult = addition(13, 22, 33, 67, 45, 345);
// console.log(getResult);

/* *** *** *** function subtraction() {
    let result = 0;
    for (const number of arguments) {
        result = number - result;
    }
    return result
}

console.log(subtraction(2, 3, 4, 13, 56, 89, 0, 45)); 
*** *** *** */

function fullName(first, last) {
    let fullName = '';
    for (const part of arguments) {
        fullName += part + ' ';
    }
    return fullName;
}

const names = fullName('Danif', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tanif', 'Songket', 'bin', 'Manif', 'Songket', 'bin', 'kanif', 'songket')
console.log(names);