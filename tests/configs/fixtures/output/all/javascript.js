export {};

// eslint-disable-next-line no-console
var log = console.log;

// Define a class using ES6 class syntax
class Person {

    constructor (name, age) {

        this.name = name;
        this.age = age;

    }

    // Define a method within the class
    sayHello () {

        log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

    }

}

// Create an array of objects
const people = [
    new Person(
        "Alice",
        30
    ),
    new Person(
        "Bob",
        25
    ),
    new Person(
        "Charlie",
        35
    )
];

// Use the forEach method to iterate over the array
people.forEach((person) => {

    person.sayHello();

});

// Use a template literal to create a multiline string
const multilineString = `
  This is a multiline string
  that spans multiple lines.
`;

// Use destructuring assignment to extract values from an object
const {name, age} = people[0];
log(
    `First person in the array is ${name} and they are ${age} years old.`,
    multilineString
);

// Use the spread operator to create a new array
const numbers = [
    1,
    2,
    3
];
const newNumbers = [
    ...numbers,
    4,
    5
];
log(newNumbers);

// Use a try-catch block for error handling
try {

    // Attempt to parse an invalid JSON string
    JSON.parse("invalid JSON");

} catch (error) {

    console.error(
        "Error parsing JSON:",
        error.message
    );

}

// Use a ternary conditional operator
const isEven = (num) => num % 2 === 0;
const number = 7;
log(`${number} is ${isEven(number)
    ? "even"
    : "odd"}.`);

// Use a callback function with setTimeout for asynchronous code
setTimeout(
    () => {

        log("This code runs after a delay of 2 seconds.");

    },
    2000
);

let a, b, c, d, foo;

if (a ||
  b ||
      c || d
) {

    foo();

}