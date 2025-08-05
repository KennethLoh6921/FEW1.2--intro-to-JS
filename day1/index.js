// THis is a Hello World console log
console.log("hello shengyang");

/* This is a multi-line comment
    i can write in multiple lines
*/

var x = 5;
console.log(x);
var x = 20;
console.log(x);

let y = 10;
y = 30;
console.log(y);

var kenneth = "kenneth";
console.log(kenneth);

let shengyang = "shengyang";
console.log(shengyang);

const a = "30";
console.log(a);

const IcNumber = "060921020327";
console.log(IcNumber);

let someWord = "this is a string";
let stringOfNumbers = "100";
let actualNumber = 100;
let actualNumber2 = 200;
console.log(someWord);
console.log(stringOfNumbers);
console.log(actualNumber);

let combi = stringOfNumbers + actualNumber + actualNumber;
console.log(combi);
let total = actualNumber + actualNumber2;
console.log(total);

const isAbsent = true;
console.log(isAbsent);

let v;
console.log(v); // undefined

const h = null;
console.log(h); // null

const student = {
    name: "John Doe",
    age: 42,
    address: "Penang",
    "0ff-231": "Hello World",
};
console.log(student.name); // Output: John Doe
console.log(student["age"]); // Output: 42

const KenT = {
    name: "Kenneth Loh",
    age: 19,
    address: "Kedah",
    hobby: "sleeping",
};
console.log(KenT.name); // Output: Kenneth Loh
console.log(KenT["age"]); // Output: 19
console.log(KenT.hobby); // Output: sleeping

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

// Two-dimensional Array
const heroes = [
    // 0         1           2
    ["ironman", "spiderman", "hulk"], // 0
    ["cabbage man", "robert cop", "kamen rider"], // 1
    ["thanos", "darkseid", "ultron"], // 2
];

console.log(heroes[0][0]); // Output: ironman
console.log(heroes[1][1]); // Output: robert cop
console.log(heroes[2][2]); // Output: ultron

// Object + Array

const comicCharacters = {
    MCU: {
        heroes: ["Iron Man", "Captain America", "Thor"],
        villains: ["Thanos", "Dr Doom", "Ultron"],
    },
    DC: {
        heroes: ["Superman", "Batman", "Flash"],
        villains: ["Joker", "Lex Luthor", "Reverse Flash"],
    },
};

console.log(comicCharacters.MCU.heroes[0]); // Output: Iron Man
console.log(comicCharacters.MCU.heroes[1]); // Output: Captain America // Output: Thor

console.log(comicCharacters.DC.villains[0]); // Output: Joker
console.log(comicCharacters.DC.villains[1]); // Output: Joker
