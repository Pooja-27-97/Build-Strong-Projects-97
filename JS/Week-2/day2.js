// console.log(Math.floor(Math.random() * (25-21+1))+21);


// let max = parseInt(prompt("Enter the range"));
// let randomNumber = Math.floor(Math.random() * max)+1;

// let guess = parseInt(prompt("Guess the number (1-100)!"));

// while(guess != randomNumber && guess != 0) {
//     if(guess > 100 || guess < 0) guess = parseInt(prompt("Out of range, try again"));
//     else if(guess < randomNumber) guess = parseInt(prompt("Too small, try largest!"));
//     else guess = parseInt(prompt("Too large, try smallest"));
// }

// if(guess === randomNumber) console.log("Congrats, Right Guess!");
// else console.log("Quitting the game!");



// function printPoem() {
//     console.log("Secrets that I  held in my heart");
//     console.log("Are harder to hide than thought");
//     console.log("Maybe I just wanna be yours");
//     console.log("I Wanna be your, Wanna be yours");
// }


// function rollDice() {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }


// function avgOfThree(a, b, c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }


// function printTable(num) {
//     for(let i=num; i <= num * 10; i+=num) {
//         console.log(i);
//     }
// }



// function sumOfN(n) {
//     let sum = 0;
//     for(let i=1; i <= n; i++) sum += i;
//     return sum;
// }


// let arr = ["Sukuna", "Mazan", "Sasuke", "Twilight"];

// function concatString(arr) {
//     let str = "";
//     for(elts of arr) str += elts;
//     return str;
// }

// console.log(concatString(arr));


// const square = (n) => (n * n);


// let intervalID = setInterval(() => console.log("Hello"), 2000);
// setTimeout(() => clearInterval(intervalID), 10000);


// let arr = [10, 2, 30, 40, 50];
// console.log(arr.every(elts => elts % 10 == 0));
// console.log(arr.reduce((min, elt) => {
//     if(min < elt) return min;
//     else return elt;
// }));


// console.log(Math.min(...arr));


// let arr = [9, 19, 5, 7, 3, 1, 0];

// function greater(arr, n) {
//     for(elt of arr) if(elt > n) console.log(elt);
// }

// greater(arr, 5);


// let str = "abcdabcdefgggh";

// const uniqueChars = (str) => {
//     let ans = "";
//     for(char of str) {
//         if(!(ans.includes(char))) ans += char;
//     }
//     return ans;
// }

// console.log(uniqueChars(str));



// let characters = [];
// let range = parseInt(prompt("Enter the count of characters"));
// for(let i=0; i < range; i++) characters[i] = prompt(`Enter the character ${i+1}`);

// const longest = (characters) => {
//     let idx = 0;
//     for(let i=0; i < characters.length; i++) {
//         if(characters[i].length > characters[idx].length) idx = i;
//     }
//     return characters[idx];
// }

// console.log(longest(characters));


// let str = "ioiogdhsjak";

// function countVowels(str) {
//     let count = 0;
//     for(char of str) if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') count++;
//     return count;
// }

// console.log(countVowels(str));



// let arr = [2, 4, 6, 8, 10, 12];

// const arrayAverage = (arr) => {
    // let sum = 0;
    // for (elt of arr) sum += elt;
    // return sum / arr.length;
// }

// console.log(arrayAverage(arr));



// let num = parseInt(prompt("Enter an integer"));

// const isEven = (num) => (num % 2 == 0);

// console.log(isEven(num));


// let arr = [2, 4, 6, 8, 10, 12];

// const operations = (arr) => {
//     let sqr = arr.map(elt => elt * elt);
//     let sum = arr.reduce((sum, elt) => sum + elt);
//     let avg = Math.floor(sum / arr.length);

//     console.log(sqr);
//     console.log(sum);
//     console.log(avg);
// }

// operations(arr);



// let arr = [2, 4, 6, 8, 10, 12];

// const add = (arr) => {
//     let newArr = arr.map(elt => elt + 5);
//     return newArr;
// }

// console.log(add(arr));


// let arr = ["Sukuna", "Mazan", "Sasuke", "Twilight"];

// const upperCase = (arr) => {
//     let newArr = arr.map(elt => elt.toUpperCase());
//     return newArr;
// }

// console.log(upperCase(arr));



// let arr = ["Sukuna", "Mazan", "Sasuke", "Twilight"];
// const doubleAndReturnArgs = (arr, ...args) => {
//     let double = args.map(elt => elt * elt);
//     return [...arr, ...double];
// }

// console.log(doubleAndReturnArgs(arr, 1, 2, 3));


// const object1 = {
//     name: "Sasuke",
//     age: 20,
//     gender: "Male"
// };

// const object2 = {
//     lastname: "Uchiha",
//     anime: "Naruto",
// };


// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// console.log(mergeObjects(object1, object2));


