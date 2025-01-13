function Person(name, age) {
     (this.name = name);
     (this.age = age);
     (this.sayHello  = function () {
         console.log('Hello'+ this.name);
     });
}

let person1 = new Person('Atikur', 14);
let person2 = new Person('Rhaman', 15);
