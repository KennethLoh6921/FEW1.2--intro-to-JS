for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//create your own for lopp, that starts from 5 to 20

for (let i = 5; i <= 20; i++) {
    console.log(i);
}

/*
    Example output
    Set 1 Rep 1:Done
    Set 1 Rep 2:Done
    Set 1 Rep 3:Done
    Set 1 Rep 4:Done
    Set 1 Rep 5:Done

    Set 2 Rep 1:Done
    Set 2 Rep 2:Done
    Set 2 Rep 3:Done
    Set 2 Rep 4:Done
    Set 2 Rep 5:Done

    Set 3 Rep 1:Done
    Set 3 Rep 2:Done
    Set 3 Rep 3:Done
    Set 3 Rep 4:Done
    Set 3 Rep 5:Done
*/

//example 1
/*
for (let set = 1; set <= 5; set++) {
    console.log(`Set 1 - Rep ${set}: Done`);
}
for (let set = 1; set <= 5; set++) {
    console.log(`Set 2 - Rep ${set}: Done`);
}
for (let set = 1; set <= 5; set++) {
    console.log(`Set 3 - Rep ${set}: Done`);
}
*/
//example 2
for (let set = 1; set <= 3; set++) {
    for (let rep = 1; rep <= 5; rep++) {
        console.log("Set " + set + " Rep " + rep + ":Done");
    }
    console.log("");
}

//Only console log when the rep count is 3 for each set
for (let set = 1; set <= 3; set++) {
    for (let rep = 1; rep <= 5; rep++) {
        if (rep === 3) {
            console.log("Set " + set + " Rep " + rep + ":Done");
        }
    }
}

//For Loop

//While Loop

let j = 1;
while (j <= 10) {
    console.log("While J: " + j);
    j++;
}

//Do the sets and reps thing, but this time using a while loop
let set = 1;
while (set <= 3) {
    let rep = 1;
    while (rep <= 5) {
        console.log("Set " + set + " Rep " + rep + ":Done");
        rep++;
    }
    set++;
}

//let myname = prompt("Enter your name:");
//console.log(myname);

let input;

while (input !== "yes" && input !== "no") {
    input = prompt('Please enter "yes" or "no":');
}

console.log("User entered:", input);
