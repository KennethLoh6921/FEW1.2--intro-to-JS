let fullName = "Kenneth Loh";
let age = 21;
let isStudent = true;

let greeting = "Hello, my name is " + fullName + ", I am " + age + " years old, and it is " + isStudent + " that I am a student.";

console.log(greeting);

function calculateArea(length, width) {
    return length * width;
}

console.log("Area: " + calcuateArea(5, 5)); //25

console.log("Area: " + calcuateArea(5, 10)); //50

console.log("Area: " + calcuateArea(10, 10)); //100

function checkTemperature(temperature) {
    if (temperature > 30) {
        return "Hot";
    } else {
        return "Cold";
    }
}
console.log(checkTemperature(35));

console.log(checkTemperature(25));

function getLetterGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Score 95: " + getLetterGrade(95));
console.log("Score 85: " + getLetterGrade(85));
console.log("Score 75: " + getLetterGrade(75));
console.log("Score 65: " + getLetterGrade(65));
console.log("Score 55: " + getLetterGrade(55));

function calculateTax(income, taxStatus) {
    if (taxStatus == "single") {
        if (income > 30000) {
            return income * 0.2;
            wd;
        } else {
            return income * 0.15;
        }
    } else {
        if (income > 50000) {
            return income * 0.15;
        } else {
            return income * 0.1;
        }
    }
}
console.log("Tax for single with income 25000: " + calculateTax(25000, "single"));
console.log("Tax for single with income 35000: " + calculateTax(35000, "single"));
console.log("Tax for married with income 45000: " + calculateTax(45000, "married"));
console.log("Tax for married with income 55000: " + calculateTax(55000, "married"));
console.log("Tax for single with income 30000: " + calculateTax(30000, "single"));
console.log("Tax for married with income 50000: " + calculateTax(50000, "married"));
console.log("Tax for single with income 40000: " + calculateTax(40000, "single"));
console.log("Tax for married with income 60000: " + calculateTax(60000, "married"));
