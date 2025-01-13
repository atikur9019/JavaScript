// Map, Filter, Every, Some, Reduce, Sort
/* ----------------------Map------------------------ */
let arr = [1, 2, 3, 4];

// let newArr = arr.map(function(element, index, arr) {
//     return element * 2;
// });

// let newArr = arr.map((element, index, arr) =>  element * 2);

let newArr = arr.map(function(element, index, arr) {
    if (element % 2 === 0) {
        return element;
    }
});


// console.log(newArr);



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

/* problem arr map */

// 1. Get an array of all names
/*solve:-*/

let allNames = characters.map((el) => {
    return el.name;
});

// console.log(allNames);
// 2. Get an array of all heights
/*solve:-*/

let allHeight = characters.map((el) => el.height);

// console.log(allHeight)

// 3. Get an array of objects with just name and height properties
/*solve:-*/

let nameAndHeight = characters.map((el) => {
    return {
        name: el.name,
        height: el.height
    }
});

// console.log(nameAndHeight)

// 4. Get an array of all first names
/*solve:-*/

let firstName = characters.map((el) => {
    return el.name.split(" ")[0];
})

// console.log(firstName);

let arr2 = [1, 5, 5, 66, 5, 8, 6, 9, 5, 2, 82, 8, 23, 1, 6, 6, 2, 26, 256];

let eventNum = arr2.filter((el) => {
    if (el % 2 == 0) return el;
});

console.log(eventNum);