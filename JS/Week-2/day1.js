// let signalColor = prompt("Enter the color of traffic light system:");

// switch(signalColor) {
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Ready to go!");
//         break;
//     case "green":
//         console.log("Go!");
//         break;
//     default:
//         console.log("Invalid color");
// }


// let str = prompt("Enter any string value");
// let lowerCaseStr = str.toLowerCase();

// if((lowerCaseStr[0] == 'a') && (lowerCaseStr.length > 3)) console.log("Good string");
// else console.log("Not a good string");


// let day = parseInt(prompt("Enter number (1 - 7)"));

// switch(day) {
//     case 1:
//         console.log("Monday!");
//         break;
//     case 2:
//         console.log("Tuesday!");
//         break;
//     case 3:
//         console.log("Wednesday!");
//         break;
//     case 4:
//         console.log("Thursday!");
//         break;
//     case 5:
//         console.log("Friday!");
//         break;
//     case 6:
//         console.log("Saturday!");
//         break;
//     case 7:
//         console.log("Sunday!");
//         break;
//     default:
//         console.log("Invalid Input");
// }


// let arr = ['january', 'july', 'march', 'august'];
// let final = arr.splice(0, 2, "july", "june");
// console.log(final);
// console.log(arr);


// let tictactoe = [['X', null, "O"], [null, "X", null], ['O', null, "X"]];
// console.log(tictactoe[0]);
// console.log(tictactoe[1]);
// console.log(tictactoe[2]);


// let n = parseInt(prompt("Enter n"));

// for(let i=n; i >= 1; i--) {
//     if(i % 2 != 0) console.log(i);
// }

// for(let i=2; i <= n; i+=2) console.log(i);

// for(let i=n; i <= n*10; i+=n) console.log(i);


// let secretColor = "purple";
// let getColor = prompt("Guess myy fav color");

// while((getColor != secretColor) && (getColor != "quit")) 
//     getColor = prompt("Oops wrong, try again!");

// if (getColor === "quit") {
//     console.log("Quitting game!");
//     console.log(`Color: ${secretColor}`);
// } else console.log("Congrats, you guessed it right!");