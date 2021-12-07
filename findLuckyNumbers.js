
// Instructions:

// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

function luckyNumbers (num) {
let newArray = [];
while (newArray.length < num) {
    let randomNums = Math.floor((Math.random()*(10) + 1))
    newArray.push(randomNums);
}
console.log(newArray);
}

luckyNumbers(5)

