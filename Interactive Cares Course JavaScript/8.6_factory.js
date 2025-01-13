// let person1 = {
//     name: 'Atikur',
//     age: 14,
//     sayHello() {
//         console.log('Hello '+ this.name);
//     },
// };

// let person1 = {
//     name: 'Rhaman',
//     age: 14,
//     sayHello() {
//         console.log('Hello '+ this.name);
//     },
// };



// Factory function

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        sayHello() {
            console.log('Hello '+ this.name )
        }
    }
}


let person1 = createPerson('Atikur', 14);
let person2 = createPerson('Rhaman', 15);

person1.sayHello();
person2.sayHello();

