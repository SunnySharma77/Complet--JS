# Operators and Conditional Statements in JavaScript

Operators in JavaScript are used to perform operations on variables and values. They are a fundamental part of the language, and understanding them is key to controlling the flow of logic in your programs. Conditional statements allow you to execute code based on certain conditions.

## 1. Operators in JavaScript

### Types of Operators:

- **Arithmetic Operators:**
  Used for basic mathematical operations.

  | Operator | Description   | Example     |
  |----------|---------------|-------------|
  | `+`      | Addition      | `5 + 3` → `8` |
  | `-`      | Subtraction   | `5 - 3` → `2` |
  | `*`      | Multiplication| `5 * 3` → `15` |
  | `/`      | Division      | `5 / 3` → `1.666` |
  | `%`      | Modulus       | `5 % 3` → `2` |
  | `++`     | Increment     | `let a = 5; a++` → `6` |
  | `--`     | Decrement     | `let a = 5; a--` → `4` |

- **Assignment Operators:**
  Used to assign values to variables.

  | Operator | Description | Example       |
  |----------|-------------|---------------|
  | `=`      | Assignment  | `let a = 5`    |
  | `+=`     | Addition Assignment | `a += 3` (Equivalent to `a = a + 3`) |
  | `-=`     | Subtraction Assignment | `a -= 3` (Equivalent to `a = a - 3`) |
  | `*=`     | Multiplication Assignment | `a *= 3` (Equivalent to `a = a * 3`) |
  | `/=`     | Division Assignment | `a /= 3` (Equivalent to `a = a / 3`) |

- **Comparison Operators:**
  Used to compare two values.

  | Operator | Description   | Example         |
  |----------|---------------|-----------------|
  | `==`     | Equal to      | `5 == 5` → `true` |
  | `===`    | Strict Equal  | `5 === "5"` → `false` |
  | `!=`     | Not equal     | `5 != 3` → `true` |
  | `!==`    | Strict Not Equal | `5 !== "5"` → `true` |
  | `>`      | Greater than  | `5 > 3` → `true` |
  | `<`      | Less than     | `5 < 3` → `false` |
  | `>=`     | Greater than or equal to | `5 >= 3` → `true` |
  | `<=`     | Less than or equal to    | `5 <= 3` → `false` |

- **Logical Operators:**
  Used to combine multiple conditions.

  | Operator | Description | Example       |
  |----------|-------------|---------------|
  | `&&`     | Logical AND | `true && false` → `false` |
  | `||`     | Logical OR  | `true || false` → `true` |
  | `!`      | Logical NOT | `!true` → `false` |

- **Ternary Operator:**
  A shorthand for an `if-else` statement. It has the form: `condition ? expression_if_true : expression_if_false`.

  ```javascript
  let age = 20;
  let canVote = (age >= 18) ? "Yes" : "No";
  console.log(canVote); // Outputs: "Yes"

