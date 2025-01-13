let arr2 = [1, 5, 5, 66, 5, 8, 6, 9, 5, 2, 82, 8, 23, 1, 6, 6, 2, 26, 256];

let eventNum = arr2.filter((el) => {
    if (el % 2 == 0) return el;
});

console.log(eventNum);

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
 
/* problem array filter */ 
// 1. Get characters with mass greater than 100
/* solve */

let greaterThan

// 2. Get characters with height less than 200
// 3. Get all male characters
// 4. Get all female characters