function sayHello(name, age) {
    return "Hello " + name + " and I am " + age + " years old";
}

let helloStatement = sayHello("Kenneth", 19);
helloStatement = helloStatement + " and I live in kedah";
console.log(helloStatement);

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(5, 7)); // Output: 30
console.log(add(8, 9)); // Output: 30

function toCelesius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

console.log(toCelesius(90)); // Output: 0

//Operators
//a. Assignment Operators

//b. Comparison Operators
/*
==  equal to
=== equal value and equal type
!=  not equal
!== not equal value or not equal type
>   greater than
<   less than
>=  greater than or equal to
<=  less than or equal to

*/

console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 == "25"); // false
console.log(1 == true); // true
console.log(0 == false); // true

console.log(5 != 5); // true
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

//Comparison Operators MORE
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false
console.log(5 >= 3); // true
