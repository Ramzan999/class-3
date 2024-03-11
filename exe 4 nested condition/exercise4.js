"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let score = 85;
if (score >= 0 && score <= 100) {
    if (score <= 90) {
        console.log("Your grade is A");
    }
    else if (score >= 80) {
        console.log("Your grade is B");
    }
    else if (score >= 70) {
        console.log("Your grade is C");
    }
    else if (score >= 60) {
        console.log("Your grade is D");
    }
    else {
        console.log("Your grade is F");
    }
}
else {
    console.log("invalid score");
}
;
