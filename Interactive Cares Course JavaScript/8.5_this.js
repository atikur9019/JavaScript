let person = {
    // name: 'Atikur',
    greeting: 'Hello',
    name: ['Atikur', 'Sakib', 'Mushifk'],
    showName: function() {
        // console.log('Hello ' + this.name);
        this.name.forEach(function(el) {
            console.log(this.greeting + ' ' + el);
        }, this);
    },

    // showName() {
    //     // console.log('Hello ' + this.name);
    //     this.name.forEach(function(el) {
    //         console.log(this.greeting + ' ' + el);
    //     }, this);
    // },
};

person.showName();

// method -> Object
// function -> global, window




//JavaScript Objects
// let newSymb = Symbol('key1');
// const mobileModel = {
//     //key: value
//     brand: 'Samsung',
//     model: 's24 Ultra',
//     processor: 'Sanpdragon Gen 3',
//     camera: ['200Mp', '12Mp', '12Mp'],
//     hasZoomCamera: true,
//     'selfie camera Mp': 12,
//     [newSymb] : 'MyKey1',
//     brandModel: function() {
//         // return `Mobile brand is ${this.brand} and model is ${this.model}`;
//     },
//     betray: {
//         mah: 5000,
//     }
// };

// // console.log(mobileModel.brandModel());


// mobileModel.model = 's25 Ultra'; // Update key value
// Object.freeze(mobileModel); // Freeze Object
// mobileModel.model = 's26 Ultra';

// // mobileModel.hasOwnProperty('camera') // Search key
// // console.log(mobileModel.hasOwnProperty('camera'));

// // console.log(Object.keys(mobileModel));
// // console.log(Object.values(mobileModel));


// // console.log(mobileModel.model);

// // console.log(mobileModel['selfie camera Mp']);
// // console.log(mobileModel[newSymb]);


// const obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const obj2 = {
//     p: 1,
//     q: 2,
//     r: 3,
// };

// const obj3 = {
//     x: 1,
//     y: 2,
//     z: 3,
// };

// const objFinal = Object.assign(obj1, obj2, obj3);
// // const objFinal ={obj1, obj2}
// // console.log(objFinal);

// // console.log(mobileModel.betray.mah);


// function Person(first, last) {
//     (this.firstName = 'first'), (this.lastName = 'last');
// }

// const person1 = new Person('Atikur', 'Rhaman');
// const person2 = new Person('Atik', 'Ahmed');

// console.log(person1);
// console.log(person2);
