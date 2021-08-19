// split()
const anthem = "Amar Sonar Bangla Ami Tomay Valobashi";

const words = anthem.split(' ')
// const words = anthem.split(' ', 5)
// const words = anthem.split('')
// const words = anthem.split('a')
// console.log(words);


// slice ()
// const slice = anthem.slice(5, 10)
const slice = anthem.slice(5, 13)
// console.log(slice);


//  substr()

// const substr = anthem.substr(3, 10)
const substr = anthem.substr(5, 12)
// console.log(substr);


// substring()

// const substring = anthem.substring(5, 13)
const substring = anthem.substring(5, 17)
// console.log(substring);

// concat()

const name1 = 'Suhag';
const name2 = ' Mokta'


const concatination = name1.concat(name2).concat(' Al Amin').concat(' Allo')

console.log(concatination);

// join()
const letters = ['S', 'u', 'h', 'a', 'g'];
// const joining = letters.join(' ')
const joining = letters.join('+')
// console.log(joining);