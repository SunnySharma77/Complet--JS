// 1. Declaring Variables

// Using 'var'
var x = 10;
var x = 20;  // Redeclaring 'x' with 'var' is allowed
console.log(x); // Outputs: 20

// Using 'let'
let y = 10;
y = 20;  // Updating 'y' with 'let' is allowed
console.log(y); // Outputs: 20

// Using 'const'
const z = 30;
// z = 40;  // Uncommenting this line will result in an error: Assignment to constant variable.
console.log(z); // Outputs: 30


// 2. Data Types

// Primitive Data Types

// String
let name = "John";
let greeting = 'Hello, world!';

// Number
let age = 25;       // Integer
let price = 19.99;   // Floating-point number

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let unassigned;
console.log(unassigned);  // Outputs: undefined

// Null
let person = null;
console.log(person);  // Outputs: null

// Symbol (ES6)
const uniqueSymbol = Symbol("description");
console.log(uniqueSymbol);  // Outputs: Symbol(description)

// BigInt (ES11)
const bigNumber = 9007199254740991n;  // BigInt type
console.log(bigNumber);  // Outputs: 9007199254740991n


// Reference Data Types

// Object
let personObject = {
  name: "John",
  age: 30,
  isActive: true
};
console.log(personObject);

// Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // Outputs: Hello, Alice!


// 3. Type Conversion

// To String
let num = 42;
let str = String(num);  // Converts number to string
console.log(str);  // Outputs: "42"

// To Number
let strNum = "42";
let convertedNum = Number(strNum);  // Converts string to number
console.log(convertedNum);  // Outputs: 42

// To Boolean
let value = 0;
let boolValue = Boolean(value);  // Converts 0 to false
console.log(boolValue);  // Outputs: false


// 4. Type Coercion

// String concatenation with a number
let result = "5" + 10;  // Outputs: "510" (number 10 is coerced to string)
console.log(result);  // Outputs: "510"

// Boolean comparison
let isTrue = Boolean("non-empty string");  // Converts non-empty string to true
console.log(isTrue);  // Outputs: true
