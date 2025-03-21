
### JavaScript File (`operators-and-conditional-statements.js`):

```javascript
// 1. Arithmetic Operators

let a = 5, b = 3;

console.log(a + b); // 8
console.log(a - b); // 2
console.log(a * b); // 15
console.log(a / b); // 1.666...
console.log(a % b); // 2

a++;  // Increment
console.log(a); // 6

b--;  // Decrement
console.log(b); // 2

// 2. Assignment Operators

let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

// 3. Comparison Operators

let isEqual = (a == b);
console.log(isEqual); // false

let isStrictEqual = (a === "5");
console.log(isStrictEqual); // false

let isNotEqual = (a != b);
console.log(isNotEqual); // true

// 4. Logical Operators

let isAdult = true;
let isStudent = false;

console.log(isAdult && isStudent); // false
console.log(isAdult || isStudent); // true
console.log(!isStudent); // true

// 5. Ternary Operator

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

// 6. Conditional Statements

// if-else Statement
let age2 = 16;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// if-else if-else Statement
let age3 = 30;
if (age3 < 18) {
  console.log("You are a minor.");
} else if (age3 < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

// switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}
