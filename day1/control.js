//Control Structures in JavaScript
//If-Else Statement

const color = "black";
if (color == "Green") {
    console.log("Go");
} else {
    console.log("Stop");
}

const age = 16;
if (age >= 18) {
    console.log("You may enter");
} else {
    console.log("You shall not enter");
}

//IF-Else If Statement
let marks = 90;
if (marks >= 90) {
    console.log("Your grade is A");
} else if (marks < 90 && marks >= 70) {
    console.log("Your grade is B");
} else if (marks < 70 && marks >= 60) {
    console.log("Your grade is C");
} else if (marks < 60 && marks >= 40) {
    console.log("Your grade is D");
} else if (marks < 40) {
    console.log("Your grade is very terrible, you fail");
}
