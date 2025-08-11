const number = [1, 2, 3, 4, 5];
number.forEach(function (number) {
    console.log(number);
});

// A bit refresher, show me how you would do
// this with normal for loop
const number2 = [1, 2, 3, 4, 5];

for (let i = 0; i < number2.length; i++) {
    console.log(number2[i]);
}


const brawlhalla = ["mordex", "jeayun"]

for (let i = 0; 1 < brawlhalla.length; 1++) {
    console.log(brawlhalla[i]);

}

brawlhalla.push ("wu shang");
console.log(brawlhalla);

brawlhalla.splice ("volko")
console.log(brawlhalla);

brawlhalla.pop("")
console.log(brawlhalla);

brawlhalla.unshift("mirage");
console.log(brawlhalla);
