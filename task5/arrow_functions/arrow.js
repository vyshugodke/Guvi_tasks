// Arrow functions:

// Print odd numbers in an array:

let getoddNumbers = () => { let arr = [4, 5, 7, 8, 14, 45, 76]; let the_odds = arr.filter(number => number % 2 !== 0);
    console.log(the_odds); }
getoddNumbers();


// Convert all the strings to title caps in a string array

let titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
titleCase("im vaishnavi from hyderabad");


// Sum of all numbers in an array

function sum(...x) { return x.reduce((a, b) => a + b) }
sum(5, 5, 6, 8)



// Return all the prime numbers in an array

const newArray = [1, 2, 3, 5, 9, 10];
const myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log(myPrimeArray);



// Return all the palindromes in an array 

isPalindrom = (str = "") => {
    if (str[0] === str[str.length - 1]) {
        return str.length <= 1 ? true : isPalindrom(str.slice(1, -1))
    }

    return false;
}

console.log(["madam"].map((e, i) => isPalindrom(e)).join())