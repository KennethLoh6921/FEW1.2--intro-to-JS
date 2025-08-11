const fruits = ["apple", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: apple, mango
}

//Push - Adds one or more elements to the end of an array
fruits.push("banana");
console.log(fruits); // Output: ["apple", "mango", "banana"]

//Pop - Removes the last element from the array
fruits.pop();
console.log(fruits); // Output: ["apple", "mango"]

//Unshift - Adds one or more elements to the beginning of an array
fruits.unshift("cempedak");
console.log(fruits); // Output: ["cempedak", "apple", "mango"]

//Shift - Removes the first element from the array
fruits.shift();
console.log(fruits); // Output: ["apple", "mango"]

//Splice - Adds or removes elements from an array
fruits.splice(1, 1); //Removes the second element
console.log(fruits); // Output: ["apple"]

// Because the second parameter in them method is 0
fruits.splice(1, 0, "durian"); // Adds durian at index 1
console.log(fruits); // Output: ["apple", "durian"]

// Because the second parameter in them method is 1
fruits.splice(1, 1, "rambutan"); // Replaces durian with rambutan
console.log(fruits); // Output: ["apple", "rambutan"]

// Slice - Returns a new array that contains a portion of the original array
let carBrands = ["Toyota", "Honda", "Nissan", "Subaru", "Mazda"];

const firstThreeBrands = carBrands.slice(0, 3);
console.log(firstThreeBrands); // Output: ["Toyota", "Honda", "Nissan"]

const lastTwoBrands = carBrands.slice(3);
console.log(lastTwoBrands); // Output: ["Subaru", "Mazda"]

const lastThreeBrands = carBrands.slice(2);
console.log(lastThreeBrands); // Output: ["Nissan", "Subaru", "Mazda"]

const middleBrands = carBrands.slice(1, 4);
console.log(middleBrands); // Output: ["Honda", "Nissan", "Subaru"]

const middleEndTwo = carBrands.slice(2, 4);
console.log(middleEndTwo); // Output: ["Nissan", "Subaru"]

//Basically, first parameter use computer

const food = ["pizza", "sushi", "nasi lemak ", "roti canai", "ice cream"];
console.log(food);

food.push("laksa");
console.log(food);

food.pop();
console.log(food);

food.shift();
console.log(food);

food.unshift("cendol");
console.log(food);

food.splice(1, 1);
console.log(food);

food.slice(0, 3);
console.log(food);
