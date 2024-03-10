"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assign a value to a variable based on a condition //
let x = 10;
let y = x > 0 ? "Positive" : "Negative or Zero";
console.log(y); // Output: Positive
// Perform a simple calculation based on a condition
let a = 5;
let b = 10;
let c = a > b ? a - b : b - a;
console.log(c); // Output: 5
// Nest the ternary operator to create multiple conditions
var score = 85;
var grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade); // Output: B
// Use parentheses to group the expressions and improve the readability
let grade_with_parentheses = score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : (score >= 60 ? "D" : "F")));
console.log(grade_with_parentheses); // Output: B
// Combine the ternary operator with other operators
let d = 2;
let e = 3;
let f = d > e ? d * e : d + e;
console.log(f); // Output: 5
// Example 1.....
myFunc(); // Output: Hello
function myFunc() {
    // This declaration is hoisted to the top of the scope
    console.log("Hello");
}
// Example 2.....
// myFunc2();   // This declaration is "not" hoisted to the top of the scope
let myFunc2 = function () {
    console.log('hello');
};
let num = 10;
if (num % 2 == 0) {
    console.log("num is even");
}
else if (num % 3 == 0) {
    console.log("num is odd and divisible by 3");
}
else {
    console.log("num is odd and not divisible by 3");
}
;
let greet = "Hello2";
if (greet === "Hello 1") {
    console.log("greet is equal to Hello1");
}
else if (greet === "Hello") {
    console.log("greet is equal to Hello");
}
else {
    console.log("greet is neither Hello1 nor Hello");
}
var score = 85;
if (score >= 0 && score <= 100) {
    if (score >= 90) {
        console.log("Your Grade is A");
    }
    else if (score >= 80) {
        console.log("Your Grade is B");
    }
    else if (score >= 70) {
        console.log("Your Grade is C");
    }
    else if (score >= 60) {
        console.log("Your Grade is D");
    }
    else {
        console.log("Your Grade is F");
    }
}
else {
    console.log("invalid score");
}
