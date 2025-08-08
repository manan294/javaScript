// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Creating objects
const p1 = new Person("Manan", 22);
const p2 = new Person("Aarav", 21);

p1.sayHello(); // Hello, my name is Manan
p2.sayHello(); // Hello, my name is Aarav

// Check that the method is shared
console.log(p1.sayHello === p2.sayHello); // true
