const numbers = [5, 10, 6, 9, 56, 21, 13, 22, 90, 40, 50];
// slice ()
// const arrSlice = numbers.slice(3, 6);
// console.log(arrSlice);
// console.log(numbers);


// splice()
// const arrSpliced = numbers.splice(3, 3)
// console.log(arrSpliced);
// console.log(numbers);

// splice and add new element into the array
const arrSpliced = numbers.splice(3, 3, 11, 22, 33, 44, 55, 66, 77, 88, 99)
console.log(arrSpliced);
console.log(numbers);