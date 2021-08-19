const numbers = [7, 4, 6, 1, 9, 0, 8, 3, 5, 2];
// const sortedNumbers = numbers.sort();
// const sortedNumbers = numbers.sort().reverse();
// console.log(sortedNumbers);


const friends = ['masum', 'rahim', 'somi', 'afruja', 'jasim', 'minajur', 'tauhid', 'suhag', 'allo']
// const sortedFriends = friends.sort()
const sortedFriendsReversed = friends.sort().reverse()
// console.log(sortedFriendsReversed);


const bigNumbers = [11, 78, 98, 45, 20, 22, 34, 89, 48, 2, 5, 3, 85, 22, 0, 1];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);