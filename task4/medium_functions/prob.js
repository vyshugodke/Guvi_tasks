// Problem 0 : Part A

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [{
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre - sleep naps'],
            weight: 3
        }
    ]
}
console.log(cat);

// Add height and weight to Fluffy
cat.height = '15'
cat.weight = '5'

// Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy'

// List all the activities of Fluffyy’s catFriends.

for (var i = 0; i < cat.catFriends.length; i++) {
    console.log(cat.catFriends[i].activities)
}

// Print the catFriends names.
for (var i = 0; i < cat.catFriends.length; i++) {
    console.log(cat.catFriends[i].name)
}

// Print the total weight of catFriends
let sum = 0;
for (var i = 0; i < cat.catFriends.length; i++) {
    sum += cat.catFriends[i].weight
}
console.log(sum);

// Print the total activities of all cats (op:6)
var total = Object.keys("activities").length;
console.log(total)


// Add 2 more activities to bar & foo cats

// Update the fur color of bar



// Problem 0 : Part B 

// var myCar = {
//     make: ‘Bugatti’,
//     model: ‘Bugatti La Voiture Noire’,
//     year: 2019,
//     accidents: [{
//             date: ‘3 / 15 / 2019’,
//             damage_points: ‘5000’,
//             atFaultForAccident: true
//         },
//         {
//             date: ‘7 / 4 / 2022’,
//             damage_points: ‘2200’,
//             atFaultForAccident: true
//         },
//         {
//             date: ‘6 / 22 / 2021’,
//             damage_points: ‘7900’,
//             atFaultForAccident: true
//         }
//     ]
// }


// 1. Loop over the accidents array. Change atFaultForAccident from true to false.



// 2. Print the dated of my accidents


// Problem 1

// Parsing an JSON object’ s Values:
//     Write a
// function called“ printAllValues” which returns an newArray of all the input object’ s values.

// Input(Object):

// var object = { name: 'RajiniKanth', age: 33, hasPets: false };
// Output: ['RajiniKanth', 33, false]


var obj = { name: 'RajiniKanth', age: 33, hasPets: false };

function printAllValues(obj) {
    return Object.values(obj);
}

console.log(printAllValues(obj));



// Problem 2

// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]

var keyy = { name: 'RajiniKanth', age: 25, hasPets: true }

function printAllKeys(obj) {
    return Object.keys(keyy);

}
console.log(printAllKeys(keyy));


// Problem 3:

// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.


var objj = { name: 'ISRO', age: 35, role: 'Scientist' };
// Output: [
//     ['name', 'ISRO'],
//     ['age', 35],
//     ['role', 'Scientist']
// ]


function convertObjectToList(obj) {
    var finalarray = [];

    for (var ele in obj) {
        var outputarray = [];
        outputarray.push(ele);
        outputarray.push(obj[ele]);
        finalarray.push(outputarray);
    }
    return finalarray;
    console.log(finalarray);
}


// Problem 4:

// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.


var array = ['GUVI', 'I', 'am', 'Geek'];

function transformFirstAndLast(array) {
    var myObject = {};
    myObject[array[0]] = array[array.length - 1];
    return myObject;
}
console.log(transformFirstAndLast(array));


// Problem 5 :

// Parsing a list of lists and convert into a JSON object:
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.


var array = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
];

function fromListToObject() {
    var object = {}; // out of the loop
    for (var i = 0; i < array.length; ++i) { // iterate to last
        var newArray = array[i];
        object[newArray[0]] = newArray[1];
    }
    return object; // out of the loop
}

var obj = fromListToObject(array);

console.log(obj);

// problem 6:
























// problem 7:

// Write an “assertObjectsEqual” function from scratch.
// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
// It is OK to use JSON.stringify().
// Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
// Success Case:

var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 }

function assertObjectsEqual(actual, expected, testName) {
    var actualString = JSON.stringify(actual);
    var expectedString = JSON.stringify(expected);
    if (actualString != expectedString) {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    } else {
        console.log("passed");
    }
}
assertObjectsEqual()


// Problem 8:

// Parsing JSON objects and Compare:
// I have a mock data of security Questions and Answers. You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

// var securityQuestions = [{
//         question: 'What was your first pet’ s name ? ',
//         expectedAnswer: 'FlufferNutter'
//     },
//     {
//         question: 'What was the model year of your first car ? ',
//         expectedAnswer: '1985'
//     },
//     {
//         question: 'What city were you born in ? ',
//         expectedAnswer: 'NYC'
//     }
// ]


var securityQuestions = [{
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]

var userAnswer = "";
var hacker = false;

for (var i = 0; i < securityQuestions.length; i++) {
    userAnswer = prompt(securityQuestions[i].question);
    if (userAnswer !== securityQuestions[i].expectedAnswer) {
        alert("Incorrect security question response!");
        hacker = true;
        break;
    }
}

if (hacker) {
    console.log("False");
} else {
    console.log("True");
}

// Problem 9:

// Write a function to return the list of characters below 20 age

var students = [{
        name: 'Siddharth Abhimanyu',
        age: 21
    }, { name: 'Malar', age: 25 },
    { name: 'Maari', age: 18 }, { name: 'Bhallala Deva', age: 17 },
    { name: 'Baahubali', age: 16 }, { name: 'AAK chandran', age: 23 }, { name: 'Gabbar Singh', age: 33 }, { name: 'Mogambo', age: 53 },
    { name: 'Munnabhai', age: 40 }, { name: 'Sher Khan', age: 20 },
    { name: 'Chulbul Pandey', age: 19 }, { name: 'Anthony', age: 28 },
    { name: 'Devdas', age: 56 }
];

function returnMinors(arr) {
    for (i in students) {
        if (students[i].age < 21) {
            console.log(students[i].name)
        }
    }
    returnMinors(arr)