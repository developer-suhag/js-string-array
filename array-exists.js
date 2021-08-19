function biggestFirend(friends) {
    if (Array.isArray(friends) == false) {
        return ('Please give an Array');
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega
}

const names = ['dell inspiron', 'hablu', 'gablu', 'tablu', 'mablu', 'dabblo'];

const bigFriend = biggestFirend(454);
// console.log(bigFriend);

// indexOf()

if (names.indexOf('hablu') != -1) {
    // console.log('Hablu ache');
} else {
    // console.log('Hablu nai');
};

// includes()

if (names.includes('gablu')) {
    // console.log('gablu ache');
}

// concat()
const first = ['Suhag', 'Al Amin'];
const second = ['Mokta', 'Allo']

const combined = first.concat(second)
console.log(combined);